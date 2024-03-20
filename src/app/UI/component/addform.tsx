"use client";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "@/redux/features/todos"; // Importing addTask action
import { AppDispatch, RootState } from "@/redux/store";
import { useState } from "react";


export default function Addform() {
  

    const [newTodo, setNewTodo] = useState({
        id: Math.random(),
        Tasktitle: "",
        dueDate:"",
        complete: false
    });
    const dispatch = useDispatch<AppDispatch>(); // Corrected typo
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(addTask (newTodo)); // Dispatching addTodo action with new todo item
      // Reset form fields after submitting
      setNewTodo({
          id: Math.random(), // You might want to generate a unique ID more reliably
          Tasktitle: "",
          dueDate: new Date().toISOString().split('T')[0],
          complete: false
      });
      
      
  };

    return (
        <div className={` flex justify-center items-center h-screen`}>
            <div className="flex flex-col w-full md:w-1/3 rounded-md shadow-md">
                <h1 className="text-blue-600 text-lg m-2 text-center font-bold">Add todo list</h1>
                <form onSubmit={handleSubmit}  
                className="flex flex-col align-middle ">
                    <input
                        type="text"
                        placeholder="Enter todo list"
                        className="m-2 p-1 rounded-sm text-black  bg-slate-100"
                        value={newTodo.Tasktitle}
                        onChange={(e) => setNewTodo({ ...newTodo, Tasktitle: e.target.value })}
                    />
                    <input
                        type="date"
                        placeholder="Enter due date"
                        className="m-3 p-1 rounded-sm text-black bg-slate-100 "
                        value={newTodo.dueDate}
                        onChange={(e) => setNewTodo({ ...newTodo, dueDate: e.target.value })}
                    />
                    <div className="flex justify-center">
                        <button
                            className="m-3 pl-5 pr-5 pt-1  pb-1 rounded-md bg-blue-600"
                             type="submit"
                        > Add Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

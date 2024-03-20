"use client";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "@/redux/features/todos"; // Importing addTask action
import { AppDispatch, RootState } from "@/redux/store";
import { useState } from "react";


export default function UpdateTask() {
    const [todo, setTodo] = useState({
        id: Math.random(),
        Tasktitle: "",
        dueDate: new Date().toISOString().split('T')[0],
        complete: false
    })
    const dispatch = useDispatch<AppDispatch>(); // Corrected typo
   

    const handleUpdateTask = () =>{
        dispatch(updateTask(todo));
        setTodo({
            ...todo,
            Tasktitle: "", // Resetting input fields after updating task
            dueDate: new Date().toISOString().split('T')[0]
        });
        
    }
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <div className="flex flex-col w-full md:w-1/3 rounded-md shadow-md">
          <h1 className="text-blue-600 text-lg m-2 text-center font-bold">Update todo list</h1>
          <form onSubmit={handleUpdateTask}
          className="flex flex-col align-middle ">
            <input
              type="text"
              placeholder="Enter todo list"
              className="m-2 p-1 rounded-sm text-black  bg-slate-100"
              value={todo.Tasktitle}
              onChange={(e) => setTodo({...todo, Tasktitle: e.target.value })}
            />
            <input
              type="date"
              placeholder="Enter due date"
              className="m-3 p-1 rounded-sm text-black bg-slate-100 "
              value={todo.dueDate}
              onChange={(e) => setTodo({...todo, dueDate: e.target.value })}
            />
            <div className="flex justify-center">
              <button className="m-3 pl-5 pr-5 pt-1  pb-1 rounded-md bg-blue-600">Update Task</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
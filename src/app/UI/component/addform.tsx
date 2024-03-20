"use client";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "@/redux/features/todos"; // Importing addTask action
import { AppDispatch, RootState } from "@/redux/store";
import { useState } from "react";
import { setAddPopup } from "@/redux/features/popup";
import { v4 as uuidv4 } from "uuid";
import CancelIcon from '@mui/icons-material/Cancel';



interface AddFormProps {
  addPopupActive: boolean;
}

export default function Addform({ addPopupActive }: AddFormProps) {
  

    const [newTodo, setNewTodo] = useState({
        id: 0,
        Tasktitle: "",
        dueDate:"",
        complete: false
    });
    const dispatch = useDispatch<AppDispatch>(); // Corrected typo
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
      e.preventDefault();
      // Generate a unique ID using uuid
      const newId = uuidv4();

      const newTodoWithId = {
        ...newTodo,
        id: newId,
      };
      dispatch(addTask (newTodo)); // Dispatching addTodo action with new todo item
      // Reset form fields after submitting
      setNewTodo({
          id: 0, // You might want to generate a unique ID more reliably
          Tasktitle: "",
          dueDate: new Date().toISOString().split('T')[0],
          complete: false
      });
      dispatch(setAddPopup(false));
      
  };

    return (
        <div className={`flex justify-center items-center h-screen ${addPopupActive ? '' : 'hidden'}`}>
            <div className="flex flex-col w-full md:w-1/3 rounded-md shadow-md">
            <div className=" flex ">
             <h1 className="text-blue-600 text-lg m-2 text-center font-bold flex-grow">Add todo list</h1>
            <CancelIcon onClick={() => dispatch(setAddPopup(false))}
                     className=" text-red-800 m-2"></CancelIcon>
             </div>
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

import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "@/redux/features/todos";
import { RootState } from "@/redux/store";
import { useState, useEffect } from "react";
import { setUpdatePopup } from "@/redux/features/popup";
import { setSelectedTask } from '@/redux/features/selectedTask';
import CancelIcon from '@mui/icons-material/Cancel';

interface UpdateFormProps {
  updatePopupActive: boolean;
}

export default function UpdateTask({ updatePopupActive }: UpdateFormProps) {
    
  const [todo, setTodo] = useState({
    id: 0, // Initialize id as 0
    Tasktitle: "",
    dueDate: new Date().toISOString().split("T")[0],
    complete: false,
  });
  const dispatch = useDispatch();

  // Get the task to be updated from the Redux store
  const selectedTask = useSelector((state: RootState) => state.selectedTask.selectedTask);

  // Update todo state when selectedTask changes
  useEffect(() => {
    if (selectedTask) {
      setTodo(selectedTask);
    }
  }, [selectedTask]);

  const handleUpdateTask = () => {
    // Dispatch the updateTask action with both id and updated todo
    dispatch(updateTask({ id: todo.id, updatedTask: todo }));

    // Reset input fields with the same task's data
    setTodo({
      ...todo,
      Tasktitle: todo.Tasktitle,
      dueDate: todo.dueDate,
    });

    // Close the update popup
    dispatch(setUpdatePopup(false));
  };

  return (
    <div className={`flex justify-center items-center h-screen ${updatePopupActive ? "" : "hidden"}`}>
      <div className="flex flex-col w-full md:w-1/3 rounded-md shadow-md">
        <div className=" flex ">
        <h1 className="text-blue-600 text-lg m-2 text-center font-bold flex-grow">Update todo list</h1>
        <CancelIcon onClick={() => dispatch(setUpdatePopup(false))}
        className=" text-red-800 m-2"></CancelIcon>
        </div>
        <div  className="flex flex-col align-middle">
          <input
            type="text"
            placeholder="Enter todo list"
            className="m-2 p-1 rounded-sm text-black  bg-slate-100"
            value={todo.Tasktitle}
            onChange={(e) => setTodo({ ...todo, Tasktitle: e.target.value })}
          />
          <input
            type="date"
            placeholder="Enter due date"
            className="m-3 p-1 rounded-sm text-black bg-slate-100 "
            value={todo.dueDate}
            onChange={(e) => setTodo({ ...todo, dueDate: e.target.value })}
          />
          <div className="flex justify-center">
            <button className="m-3 pl-5 pr-5 pt-1 pb-1 rounded-md bg-blue-600" onClick={handleUpdateTask}>
              Update Task
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

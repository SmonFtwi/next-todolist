import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store'; // Adjust the path as per your project structure
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { Task } from '@/redux/features/todos';

export default function Todolist() {
    // Select the tasks array from the Redux store
    const tasks = useSelector((state: RootState) => state.taskManager.value);
    const dispatch = useDispatch();

    

    

    return (
        <div className='fixed  w-full h-ful p-4 z-0'>
        <div className='flex flex-col  items-center h-screen'>
            <h1 className="text-blue-600 text-lg m-2 text-center font-bold"> My todo list</h1>
            <ul className='flex flex-col w-full md:w-1/2  '>
                {tasks.map(task => (
                    <li  className=' flex  rounded-md shadow-md  p-2 m-2'
                    key={task.id}>
                        
                        <p className='flex-grow'>{task.Tasktitle}</p>
                        <p className='flex-initial w-32 '>{task.dueDate}</p>
                        <p className=' flex-end mr-2'
                        ><ModeEditIcon className='w-32' /></p>
                        <p className= 'flex-end ml-2'><DeleteIcon className='w-32' /></p>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
}
``

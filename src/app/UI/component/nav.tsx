import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setAddPopup } from '@/redux/features/popup'; // Import the action

export default function Nav() {
  const dispatch = useDispatch();
  const addPopup = useSelector((state: RootState) => state.popupTraker.addPopup); // Get the addPopup state from Redux

  const handleNewTodoListClick = () => {
    // Dispatch the action to toggle the addPopup state
    dispatch(setAddPopup(!addPopup));
  };

  return (
    <div className="flex p-3 justify-between items-center shadow-md">
      <h1 className="text-xl text-blue-600 font-bold">Task manager</h1>
      <button onClick={handleNewTodoListClick} className="bg-blue-600 rounded-lg p-2"> New Todo List</button>
    </div>
  );
}

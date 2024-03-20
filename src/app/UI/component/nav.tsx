import { useDispatch } from 'react-redux';
 // Adjust the path as per your project structure


 


export default function Nav() {
  const dispatch = useDispatch();

  const handleNewTodoListClick = () => {
    
  };
  return (
    <div className=" flex  p-3 justify-between items-center shadow-md">
      <h1 className = "text-xl text-blue-600 font-bold">Task manager</h1>
      <button onClick={handleNewTodoListClick} 
       className=" bg-blue-600 rounded-lg p-2"> New Todo List</button>
    </div>
  )
}

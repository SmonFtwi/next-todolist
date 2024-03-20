'use client'
import Image from "next/image";
import Nav from "./UI/component/nav"
import Addform from './UI/component/addform'
import Todolist from "./UI/component/todolist";
import UpdateTask from "./UI/component/updatetask";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';


export default function Home() {
  const addPopupActive = useSelector((state: RootState) => state.popupTraker.addPopup);
  const updatePopupActive = useSelector((state: RootState) => state.popupTraker.updatePopup);

  
  return (
    <main className="flex  flex-col ">
      <div>
        <Nav />
        <Addform addPopupActive={addPopupActive} />
        <UpdateTask updatePopupActive= {updatePopupActive}/>
        <Todolist/>
      </div>
    </main>
  );
}

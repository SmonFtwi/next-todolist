'use client'
import Image from "next/image";
import Nav from "./UI/component/nav"
import Addform from './UI/component/addform'
import Todolist from "./UI/component/todolist";
import UpdateTask from "./UI/component/updatetask";
import { useState } from "react";


export default function Home() {
  const [addpopupActive, setaddPopupActive] = useState(false);
  const [updatepopupActive, setUpdatePopupActive] = useState(false);

  
  return (
    <main className="flex  flex-col ">
      <div>
        <Nav />
        <Addform />
        <UpdateTask/>
        <Todolist/>
      </div>
    </main>
  );
}

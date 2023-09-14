/* eslint-disable react/jsx-no-undef */
"use client";
import Image from "next/image";
import { useState } from "react";

import { BsFillArrowLeftCircleFill, BsHouseCheck } from "react-icons/bs";
import { MdPrivacyTip, MdTipsAndUpdates } from "react-icons/md"
import { IoGameControllerOutline, IoLogOutOutline } from "react-icons/io5";
import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
 function navBar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setisOpen] = useState(true)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);


  };


  // function setName(value: string): void {
  //   throw new Error("Function not implemented.");
  // }

  // const Menu ={
  //   {title: "Dashboard" }
  //   {title: "Page" }
  //   {title:"Media" , spacing :true}
  //   {

  //   }

  // }



  return (



    <div className="flex bg-zinc-700 h-screen">
      <div className={`bg-slate-950 h-full p-5 pt-8 ${isOpen ? "w-72" : "w-20"}  duration-300 relative`}>
        <BsFillArrowLeftCircleFill className={`text-white text-3xl absolute -right-3  border border-purple-900 cursor-pointer rounded-full ${isOpen && "rotate-180"} `}
          onClick={() => setisOpen(!isOpen)} />

        <div className="inline-flex">
          <a href="#" className="flex items-center">
            <Image
              src="/logo.png"
              width={200}
              height={50}
              alt="Picture of the author"

            />
          </a>
        </div>


        <div className={`flex items-center rounded-md  bg-slate-100 mt-6 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
          <BsHouseCheck className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />
          <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>HOME</span>
        </div>
        <div className={`flex items-center rounded-md  bg-slate-100 mt-6 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
          <IoGameControllerOutline className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />
          <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>Game</span>
        </div>
        <div className={`flex items-center rounded-md  bg-slate-100 mt-6 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
          <MdPrivacyTip className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />
          <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>Privacy</span>
        </div>
        <div className={`flex items-center rounded-md  bg-slate-100 mt-6 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
          <MdTipsAndUpdates className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />
          <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>Tips</span>
        </div>

        <div className={`flex items-center rounded-md  bg-red-400 mt-64 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
          <a href="/login">
            <IoLogOutOutline className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />



            <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>LogOut</span>
          </a>
        </div>





      </div>









    </div>

  );
}


export default navBar;






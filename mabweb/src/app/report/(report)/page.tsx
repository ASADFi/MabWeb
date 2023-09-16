"use client"
import Image from "next/image";
import { useState } from "react";
import { BiSolidReport } from "react-icons/bi";
import { BsFillArrowLeftCircleFill, BsHouseCheck } from "react-icons/bs";
import { IoGameControllerOutline, IoLogOutOutline } from "react-icons/io5";
import { MdPrivacyTip, MdTipsAndUpdates } from "react-icons/md";

export default function game() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setisOpen] = useState(true)
    return (
        <main className="bg-zinc-600 h-screen flex">
            <title>MB SOLUTION |Report</title>
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


                <a href="/home">
                    <div className={`flex items-center rounded-md  bg-slate-100 mt-6 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
                        <BsHouseCheck className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />
                        <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>HOME</span>
                    </div>
                </a>
                <a href="/game">
                    <div className={`flex items-center rounded-md  bg-slate-100 mt-6 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
                        <IoGameControllerOutline className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />
                        <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>Game</span>
                    </div>
                </a>
                <a href="/privacy">
                    <div className={`flex items-center rounded-md  bg-slate-100 mt-6 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
                        <MdPrivacyTip className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />
                        <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>Privacy</span>
                    </div>
                </a>
                <div className={`flex items-center rounded-md  bg-slate-600 mt-6 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
                    <BiSolidReport className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />
                    <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>Report</span>
                </div>
                <a href="/tips">


                    <div className={`flex items-center rounded-md  bg-slate-100 mt-6 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
                        <MdTipsAndUpdates className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />
                        <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>Tips</span>
                    </div>
                </a>







                <div className={`flex items-center rounded-md  bg-red-400 mt-52 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
                    <a href="/login">
                        <IoLogOutOutline className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />





                        <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>LogOut</span>
                    </a>
                </div>




            </div>

            <div className="flex justify-center items-center   w-full">
                <h1 className=" w-56 flex justify-center items-center text-9xl font-semibold  text-slate-950">REPORTS</h1>
            </div>

            <div id="datatable"></div>
        </main>
    )
}
'use client'

import { Metadata } from "next";
import { title } from "process";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
export const metadata: Metadata = {
  title: "MAB SOLUTION | LOGIN",
  description: "MAB SOLUTION.",
};
export default function page() {
  const notify = (msg: string) => {
    toast.success(msg,
      {
        position: "top-right",
        autoClose: 5079,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });



  };
  const handleClick = async () => {
    notify("login successful ")

  }

  return (
<main className="h-screen bg-zinc-700 ">
<div className="flex justify-start  h-16 w-52 ml-14 ">
  <div className="flex justify-center items-center ">
    </div> </div>

    <div className=" flex  justify-center items-center h-full ">

      
      <title>MAB SOLUTION |Login</title>
      <div className=" w-80 h-3/5 bg-slate-950  rounded-xl p-2  flex flex-col ">
        <p className=" mt-4 text-center font-bold text-2xl">Login</p>


        {/* input button */}
        <div className="mt-4  ml-9 ">
          <label className="font-mono  text-slate-500 text-lg">Username</label>


          <div className="">

            <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="name..." type="text" name="name"
            ></input>
          </div>
        </div>

        <div className="  mx-7  ml-9  mt-2">
          <label className="font-mono  text-slate-500 text-lg">Password</label>
          <div className="  ">
            <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-full border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" id="password" type="password" placeholder="****************" />



          </div>

        </div>

        {/* forget passworf */}
        <div className=" flex ml-36 mt-2 font-thin text-base">
          <a rel="noopener noreferrer" href="#">Forgot Password?</a>
        </div>
        {/* button */}
        <div className="mt-4   flex justify-center items-center">
          <a href="/home"
            target="_blank"
          >


            <button className=" bg-purple-400 h-10 w-60 rounded-md text-black " onClick={handleClick}>Sign in
            </button>
            <ToastContainer />
          </a>
        </div>



        <div className="flex justify-center items-center font-thin text-base mt-4">
          Don't have a account? <button className="text-lg font-normal ">Sign up</button>
        </div>


      </div>


    </div>
  
  

</main>



  )
}








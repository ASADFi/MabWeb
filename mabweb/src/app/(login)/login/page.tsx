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
    <main className="h-screen bg-zinc-700  ">

<title>MAB SOLUTION |Login</title>

 <div className="justify-center  items-center flex">  
   <div className="justify-center  items-center flex   w-44 h-20 ">
   <Image
      src="/logo.png"
      width={200}
      height={50}
      alt="Picture of the author"
    />
    
    
   </div>
   </div>





      <div className=" flex  justify-center items-center h-full ">
        


        
        <div className=" w-80 h-3/5 bg-slate-950  rounded-xl p-2  flex flex-col ">
          <p className=" mt-4 text-center font-bold text-2xl">Login</p>


          {/* input button */}
          <div className="mt-4  ml-9 ">
            <label className="font-mono  text-slate-500 text-lg">Username</label>


            <div className="">
                      <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i>
              <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="name..." type="text" name="name"
            
              />
              
            </div>
          </div>

          <div className="  mx-7  ml-9  mt-2">
           
            <label className="font-mono  text-slate-500 text-lg">Password</label>
            
              <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></i>
              <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-full border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" id="password" type="password" placeholder="****************" />


              
            
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
            </a>
            <ToastContainer />
          </div>



          <div className="flex justify-center items-center font-thin text-base mt-4">

            Don't have a account? <button className="text-lg font-normal " >
              <a href="/signup"
                target="_blank"> Sign up
              </a>
            </button>

          </div>


        </div>


      </div>



    </main>



  )
}








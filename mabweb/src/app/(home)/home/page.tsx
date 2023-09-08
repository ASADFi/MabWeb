import Image from "next/image"
export default function page() {
    return (
        <main className="h-screen w-full bg-zinc-700 overflow-hidden  ">
            <section className="   w-full h-20 flex justify-between  ">

                <div className="ml-9   mt-5 ">
                    <a href="/home">
                        <Image
                            src="/logo.png"
                            width={200}
                            height={50}
                            alt="Picture of the author"

                        />
                    </a>
                </div>



                <p className=" mr-9 mt-5    ">
                    <a href="/login" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Log Out</span>
                    </a>

                </p>


            </section>









            <section className="  flex justify-center  items-center">
                <div className="w-2/3 h-full bg-slate-950  rounded-xl  mt-9   shadow-[0_0_10px_purple] ">
                <h1 className="flex  justify-center    text-3xl font-mono ">
                    WELCOME MAB!
                </h1>




                {/* testing */}
                <div className="flex flex-row justify-evenly ">
                    <div> <div className=" w-44 ">
                    
                    
                    
                    <label className="font-mono  text-slate-500 text-lg">Username</label>


<div className="">
  {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}
 
  
  <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="name..." type="number" name="name"
 
  />

</div>
</div></div>
                    <div> <div className=" w-44 ">
                    
                    
                    
                    <label className="font-mono  text-slate-500 text-lg">Username</label>


<div className="">
  {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}
 
  
  <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="name..." type="number" name="name"
 
  />

</div>
</div></div>
                    <div> <div className=" w-44 ">
                    
                    
                    
                    <label className="font-mono  text-slate-500 text-lg">Username</label>


<div className="">
  {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}
 
  
  <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="name..." type="number" name="name"
 
  />

</div>
</div></div>
                    
                </div>

                <div className="flex  justify-center  items-center flex-col bg-red-600 gap-20 mt-5 ">
                 <div className=" w-44 ">
                    
                    
                    
                    <label className="font-mono  text-slate-500 text-lg">Username</label>


<div className="">
  {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}
 
  
  <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="name..." type="number" name="name"
 
  />

</div>
</div>
                    </div>
                <div className="flex  justify-center  items-center flex-col bg-red-600 gap-20 mt-5 ">
                 <div className=" w-44 "><label className="font-mono  text-slate-500 text-lg">Username</label>


<div className="">
  {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}
  <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="name..." type="date" name="name"

  />

</div></div>
                    
                    </div>
                <div className="flex  justify-center  items-center flex-col bg-red-600 gap-20 mt-5 ">
                 <div className=" w-44 "><label className="font-mono  text-slate-500 text-lg">Username</label>


<div className="">
  {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}
  <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="name..." type="" name="name"

  />

</div></div>
 
                    </div>
                
                </div>


            </section>






























        </main>
    )
}
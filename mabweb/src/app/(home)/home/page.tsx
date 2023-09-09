"use client";


import Image from "next/image"



import { useState } from "react";
export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState('');
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
                <div className="w-5/6 h-full bg-slate-950  rounded-xl  mt-9   shadow-[0_0_10px_purple] ">
                    <h1 className="flex  justify-center    text-3xl font-mono mt-4 ">
                        WELCOME MAB!
                    </h1>




                    {/* testing */}

                    <section>

                        <div className="flex flex-row justify-evenly  ">

                            <div className=" w-44 ">



                                <label className="font-mono  text-slate-500 text-lg">Date</label>



                                {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


                                <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Date..." type="date" name="date"


                                />


                            </div>


                            <div className=" w-44 ">



                                <label className="font-mono  text-slate-500 text-lg">FBID/URL</label>


                                <div className="">
                                    {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


                                    <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="FBID/URL..." type="url" name="url"

                                    />

                                </div>

                            </div>




                            <div className=" w-44 ">



                                <label className="font-mono  text-slate-500 text-lg">Amount</label>


                                <div className="">
                                    {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


                                    <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Amount..." type="number" name="name"
                                        defaultValue="0" // Set the default value here
                                        onChange={(e) => setName(e.target.value)}

                                    />

                                </div>
                            </div>




                        </div>
                        <div className="flex flex-row justify-evenly  ">

                            <div className=" w-44 mt-4">



                                <label className="font-mono  text-slate-500 text-lg">Tip</label>



                                {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


                                <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Tip..." type="number" name="name"
                                    defaultValue="0" // Set the default value here
                                    onChange={(e) => setName(e.target.value)}

                                />


                            </div>


                            <div className=" w-44 mt-4 ">



                                <label className="font-mono  text-slate-500 text-lg">Lead</label>


                                <div className="">
                                    {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


                                    <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Lead..." type="string"

                                    />

                                </div>

                            </div>




                            <div className=" w-44 mt-4 ">



                                <label className="font-mono  text-slate-500 text-lg">PageUrl</label>


                                <div className="">
                                    {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


                                    <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="PageUrl..." type="string" name="PageUrl"

                                    />

                                </div>
                            </div>




                        </div>
                        <div className="flex flex-row justify-evenly  ">

                            <div></div>

                            



                                
                            


                            <div className=" w-44 mt-4 ">



                                <label className="font-mono  text-slate-500 text-lg">Game</label>


                                <div className="">
                                    {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


                                    <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Game..." type="list" name="Game"

                                    />

                                </div>

                            </div>




                            <div className=" w-44 mt-4 ">



                                <label className="font-mono  text-slate-500 text-lg">Description</label>


                                <div className="">
                                    {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


                                    <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Description..." type="string" name="Description"
                                        defaultValue="" // Set the default value here
                                        onChange={(e) => setName(e.target.value)}

                                    />


                                </div>
                            </div>




                        </div>



                        <div className="flex justify-center items-center mt-8 m-8">
                            <a>
                                <button >
                                    <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-lg shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Submit</span>
                                        <span className="relative invisible">Submit</span>
                                    </a>


                                </button>
                            </a>
                        </div>

                    </section>


                </div>




            </section>






























        </main>
    )
}
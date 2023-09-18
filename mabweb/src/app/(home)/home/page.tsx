


"use client"

/* eslint-disable react/jsx-no-undef */

import { useState } from "react";

import Navbar from "@/component/nav";
import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
export default function home() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setisOpen] = useState(true)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);


    };


    function setName(value: string): void {
        throw new Error("Function not implemented.");
    }







    return (
          <main className=" flex bg-zinc-700 h-screen ">
            <title>MAB SOLUTION |Home</title>
            <Navbar />

            {/* <div className="p-16 ml-6 "> */}
            <div className="h-full w-full bg-slate-950  rounded-xl  ml-6   shadow-[0_0_10px_purple]">
                <h1 className="flex  justify-center    text-3xl font-mono mt-7 text-white">
                    WELCOME MAB!
                </h1>
                <div className="flex flex-row justify-evenly gap-5 p-3 flex-wrap">

                    <div className="  ">



                        <label className="font-mono  text-slate-500 text-lg">Date</label>



                        {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


                        <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Date..." type="date" name="date"


                        />


                    </div>


                    <div className="  ">



                        <label className="font-mono  text-slate-500 text-lg">FBID/URL</label>


                        <div className="">
                            {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


                            <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="FBID/URL..." type="url" name="url"

                            />

                        </div>

                    </div>
                    <div className="  ">



                        <label className="font-mono  text-slate-500 text-lg">FBID/URL</label>


                        <div className="">
                            {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


                            <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="FBID/URL..." type="url" name="url"

                            />

                        </div>

                    </div>




                    <div className="  ">



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
                <div className="flex flex-row justify-evenly gap-5 p-3 flex-wrap">

                    <div className="  ">



                        <label className="font-mono  text-slate-500 text-lg">tip</label>
                        <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Tip..." type="number" name="Tip"
                            defaultValue="0" // Set the default value here
                            onChange={(e) => setName(e.target.value)}

                        />


                    </div>


                    <div className="  ">



                        <label className="font-mono  text-slate-500 text-lg">PG/URL</label>


                        <div className="">
                            {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


                            <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="PG/URL..." type="url" name="url"

                            />

                        </div>

                    </div>
                    <div className="  ">



                        <label className="font-mono  text-slate-500 text-lg">Lead</label>


                        <div className="">
                            {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


                            <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Lead..." type="string" name="Lead"

                            />

                        </div>

                    </div>




                    <div className="  ">



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


                <div className="flex flex-row justify-evenly gap-5 p-3 flex-wrap">

                    <div className="  justify-center flex items-center h-10 w-60 mt-7 ">



                        <label className="relative inline-flex items-center cursor-pointer ">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-600 dark:peer-focus:ring-purple-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-500"></div>
                            <span className="ml-3 text-sm font-mono text-2xl text-slate-900 dark:text-gray-300">Approved</span>
                        </label>


                    </div>


                    <div className="  ">

                        <label className="font-mono  text-slate-500 text-lg">Game</label>

                        <FormControl sx={{ minWidth: 200 }} >

                            <Select
                                className="h-10  w-60 rounded-lg shadow-sm mt-2  "

                                sx={{
                                    color: "white",

                                    '.MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(148, 163 ,184 )',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(192 132 252)',
                                        borderWidth: 2
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(192 132 252)',
                                        borderWidth: 2
                                    },
                                    '.MuiSvgIcon-root ': {
                                        fill: "white !important",
                                    }
                                }}

                                renderValue={(selected) => {


                                    if (!!selected === false) {
                                        return <em className="font-italic   text-slate-400  text-sm px-4">Game...</em>;
                                    }

                                    return selected;
                                }}
                                displayEmpty
                                labelId="select-filter-by-field-labe;"
                                // className="text-white "
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"



                                onChange={handleChange}
                            >
                                <MenuItem value={10} >Milky Star</MenuItem>
                                <MenuItem value={20}>Takken7</MenuItem>
                                <MenuItem value={30}>rollin</MenuItem>
                                <MenuItem value={40}>None</MenuItem>

                            </Select></FormControl>




                    </div>







                    <div className="  ">



                        <label className="font-mono  text-slate-500 text-lg">FBID/URL</label>


                        <div className="">
                            {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


                            <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="FBID/URL..." type="url" name="url"

                            />

                        </div>

                    </div>




                    <div className="  ">



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









                <div className="flex justify-center items-center  m-11">
                    <a>
                        <button >
                            <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-lg shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                    {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                    <span className="text-white">Submit</span>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Submit</span>
                                <span className="relative invisible">Submit</span>
                            </a>


                        </button>


                    </a>
                </div>






            </div>
            {/* </div> */}






        </main>

    );
}






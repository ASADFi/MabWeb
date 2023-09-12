"use client";


import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Image from "next/image";
import React, { useState } from "react";



export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);

    };
    const checkBoxStyle = {
        "&.Mui-checked": {
            color: "#009949",
            size: 'lg'
        }

    }


    return (
        <main className="h-screen w-full bg-zinc-700 overflow-hidden  ">
            <section>
                <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="/home" className="flex items-center">
                            <Image
                                src="/logo.png"
                                width={200}
                                height={50}
                                alt="Picture of the author"

                            />
                            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
                            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                        </a>
                        <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-purple-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-purple-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg></button>
                                    {/* <!-- Dropdown menu --> */}
                                    
                                    <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                            </li>
                                            <li aria-labelledby="dropdownNavbarLink">
                                                <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                                </svg></button>
                                                <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                                        <li>
                                                            <a href="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My downloads</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                            </li>
                                        </ul>
                                        <div className="py-1">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                                        </div>
                                    </div>

                                </li>
                                <li>
                                    <a href="/signup" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                                </li>
                                <li>
                                    <a href="/login" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
            {/* <section className="   w-full h-20 flex justify-between  ">

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


            </section> */}









            <section className="  flex justify-center  items-center">
                <div className="w-5/6 h-full bg-slate-950  rounded-xl  mt-9   shadow-[0_0_10px_purple] ">
                    <h1 className="flex  justify-center    text-3xl font-mono mt-4 text-white">
                        WELCOME MAB!
                    </h1>




                    {/* testing */}

                    <section className="mt-5">

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


                            <div className=" w-44 mt-12 ">





                                {/* <FormControlLabel

                                    value="start"
                                    control={<Switch color="secondary" defaultChecked className=" " />}
                                    label="Approved"
                                    labelPlacement="start"
                                    sx={{ checkBoxStyle }}

                                /> */}


                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-600 dark:peer-focus:ring-purple-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-500"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
                                </label>

                            </div>








                            <div className=" w-44 mt-4 ">


                                <label className="font-mono  text-slate-500 text-lg">Game</label>

                                <FormControl sx={{ minWidth: 200 }} >

                                    <Select
                                        className="h-10 w-60 rounded-lg shadow-sm mt-2  "

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

                    </section>


                </div>




            </section>






























        </main>
    )
}
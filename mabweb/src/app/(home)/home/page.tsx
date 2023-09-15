// "use client";


// import DropDown from '@/component/dropdownmenu';
// import FormControl from '@mui/material/FormControl';
// import MenuItem from '@mui/material/MenuItem';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Image from "next/image";
// import React, { useState } from "react";

// import navBar from '@/component/dropdownmenu';



// export default function page() {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [name, setName] = useState('');
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [age, setAge] = React.useState('');

//     const handleChange = (event: SelectChangeEvent) => {
//         setAge(event.target.value as string);

//     };
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [OpenProfile, setOpenProfile] = useState(false)



//     return (
//         <main className="h-screen w-full bg-zinc-700 overflow-hidden  ">



//             {/* <nav className="bg-white border-gray-200 dark:bg-slate-950 dark:border-gray-700">
//                 <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                     <a href="#" className="flex items-center">
//                         <Image
//                             src="/logo.png"
//                             width={200}
//                             height={50}
//                             alt="Picture of the author"

//                         />
//                     </a>
//                     <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
//                         <span className="sr-only">Open main menu</span>
//                         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
//                         </svg>
//                     </button>
//                     <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
//                         <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                             <li>
//                                 <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
//                             </li>


//                             <li>

//                                 <button className="  " onClick={() => setOpenProfile((prev) => !prev)}>
//                                     <span className=' cursor-pointer '>DropDown


//                                     </span>



//                                       {OpenProfile &&(<DropDown />)
//                                         }


//                                 </button>

//                             </li>



//                             <li>
//                                 <a href="signup" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover: dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
//                             </li>
//                             <li>
//                                 <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
//                             </li>
//                             <li>
//                                 <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav> */}




//             {/* <section className="   w-full h-20 flex justify-between  ">

//                 <div className="ml-9   mt-5 ">
//                     <a href="/home">
//                         <Image
//                             src="/logo.png"
//                             width={200}
//                             height={50}
//                             alt="Picture of the author"

//                         />
//                     </a>
//                 </div>



//                 <p className=" mr-9 mt-5    ">
//                     <a href="/login" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
//                         <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
//                         <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Log Out</span>
//                     </a>

//                 </p>


//             </section> */}









//             <section className="  flex justify-center  items-center ">
//                 <div className="w-5/6 h-full bg-slate-950  rounded-xl  mt-9   shadow-[0_0_10px_purple] ">
//                     <h1 className="flex  justify-center    text-3xl font-mono mt-4 text-white">
//                         WELCOME MAB!
//                     </h1>




//                     {/* testing */}

//                     <section className="mt-5 ">

//                         <div className="flex flex-row justify-evenly  flex-wrap">

//                             <div className=" w-44 ">



//                                 <label className="font-mono  text-slate-500 text-lg">Date</label>



//                                 {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//                                 <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Date..." type="date" name="date"


//                                 />


//                             </div>


//                             <div className=" w-44 ">



//                                 <label className="font-mono  text-slate-500 text-lg">FBID/URL</label>


//                                 <div className="">
//                                     {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//                                     <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="FBID/URL..." type="url" name="url"

//                                     />

//                                 </div>

//                             </div>




//                             <div className=" w-44 ">



//                                 <label className="font-mono  text-slate-500 text-lg">Amount</label>


//                                 <div className="">
//                                     {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//                                     <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Amount..." type="number" name="name"
//                                         defaultValue="0" // Set the default value here
//                                         onChange={(e) => setName(e.target.value)}

//                                     />

//                                 </div>
//                             </div>




//                         </div>
//                         <div className="flex flex-row justify-evenly flex-wrap  ">

//                             <div className=" w-44 mt-4">



//                                 <label className="font-mono  text-slate-500 text-lg">Tip</label>



//                                 {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//                                 <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Tip..." type="number" name="name"
//                                     defaultValue="0" // Set the default value here
//                                     onChange={(e) => setName(e.target.value)}

//                                 />


//                             </div>


//                             <div className=" w-44 mt-4 ">



//                                 <label className="font-mono  text-slate-500 text-lg">Lead</label>


//                                 <div className="">
//                                     {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//                                     <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Lead..." type="string"

//                                     />

//                                 </div>

//                             </div>




//                             <div className=" w-44 mt-4 ">



//                                 <label className="font-mono  text-slate-500 text-lg">PageUrl</label>


//                                 <div className="">
//                                     {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//                                     <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="PageUrl..." type="string" name="PageUrl"

//                                     />

//                                 </div>
//                             </div>




//                         </div>
//                         <div className="flex flex-row justify-evenly flex- ">


//                             <div className=" w-44 mt-12 ">





//                                 {/* <FormControlLabel

//                                     value="start"
//                                     control={<Switch color="secondary" defaultChecked className=" " />}
//                                     label="Approved"
//                                     labelPlacement="start"
//                                     sx={{ checkBoxStyle }}

//                                 /> */}


//                                 <label className="relative inline-flex items-center cursor-pointer">
//                                     <input type="checkbox" value="" className="sr-only peer" />
//                                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-600 dark:peer-focus:ring-purple-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-500"></div>
//                                     <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
//                                 </label>

//                             </div>








//                             <div className=" w-44 mt-4 ">


//                                 <label className="font-mono  text-slate-500 text-lg">Game</label>

//                                 <FormControl sx={{ minWidth: 200 }} >

//                                     <Select
//                                         className="h-10 w-60 rounded-lg shadow-sm mt-2  "

//                                         sx={{
//                                             color: "white",

//                                             '.MuiOutlinedInput-notchedOutline': {
//                                                 borderColor: 'rgba(148, 163 ,184 )',
//                                             },
//                                             '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//                                                 borderColor: 'rgba(192 132 252)',
//                                                 borderWidth: 2
//                                             },
//                                             '&:hover .MuiOutlinedInput-notchedOutline': {
//                                                 borderColor: 'rgba(192 132 252)',
//                                                 borderWidth: 2
//                                             },
//                                             '.MuiSvgIcon-root ': {
//                                                 fill: "white !important",
//                                             }
//                                         }}

//                                         renderValue={(selected) => {


//                                             if (!!selected === false) {
//                                                 return <em className="font-italic   text-slate-400  text-sm px-4">Game...</em>;
//                                             }

//                                             return selected;
//                                         }}
//                                         displayEmpty
//                                         labelId="select-filter-by-field-labe;"
//                                         // className="text-white "
//                                         // labelId="demo-simple-select-label"
//                                         id="demo-simple-select"



//                                         onChange={handleChange}
//                                     >
//                                         <MenuItem value={10} >Milky Star</MenuItem>
//                                         <MenuItem value={20}>Takken7</MenuItem>
//                                         <MenuItem value={30}>rollin</MenuItem>
//                                         <MenuItem value={40}>None</MenuItem>

//                                     </Select></FormControl>





//                             </div>




//                             <div className=" w-44 mt-4 ">



//                                 <label className="font-mono  text-slate-500 text-lg">Description</label>


//                                 <div className="">
//                                     {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//                                     <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Description..." type="string" name="Description"
//                                         defaultValue="" // Set the default value here
//                                         onChange={(e) => setName(e.target.value)}

//                                     />


//                                 </div>
//                             </div>




//                         </div>



//                         <div className="flex justify-center items-center  m-11">
//                             <a>
//                                 <button >
//                                     <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-lg shadow-md group">
//                                         <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
//                                             {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
//                                             <span className="text-white">Submit</span>
//                                         </span>
//                                         <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Submit</span>
//                                         <span className="relative invisible">Submit</span>
//                                     </a>


//                                 </button>


//                             </a>
//                         </div>

//                     </section>


//                 </div>




//             </section>






























//         </main>
//     )
// }














/* eslint-disable react/jsx-no-undef */
"use client";
import Image from "next/image";
import { useState } from "react";

import { BsFillArrowLeftCircleFill, BsHouseCheck } from "react-icons/bs";
import { MdPrivacyTip, MdTipsAndUpdates } from "react-icons/md"
import { IoGameControllerOutline, IoLogOutOutline } from "react-icons/io5";
import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import App from "@/app/game/(game)/page";
export default function navBar() {
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



        <main className=" flex bg-zinc-700 h-screen ">
            <title>MAB SOLUTION |Home</title>

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
                    <a href="/game">
                        <IoGameControllerOutline className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />
                        <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>Game</span>
                    </a>
                </div>
                <div className={`flex items-center rounded-md  bg-slate-100 mt-6 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
                    <MdPrivacyTip className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />
                    <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>Privacy</span>
                </div>
                <div className={`flex items-center rounded-md  bg-slate-100 mt-6 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
                    <MdTipsAndUpdates className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />
                    <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>Tips</span>
                </div>







                <div className={`flex items-center rounded-md  bg-red-400 mt-52 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
                    <a href="/login">
                        <IoLogOutOutline className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />





                        <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>LogOut</span>
                    </a>
                </div>




            </div>





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






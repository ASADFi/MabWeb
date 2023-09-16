// /* eslint-disable react/jsx-no-undef */
// "use client";
// import Image from "next/image";
// import { useState } from "react";

// import { BsFillArrowLeftCircleFill, BsHouseCheck } from "react-icons/bs";
// import { MdPrivacyTip, MdTipsAndUpdates } from "react-icons/md"
// import { IoGameControllerOutline, IoLogOutOutline } from "react-icons/io5";
// import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
// export default function navBar() {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [isOpen, setisOpen] = useState(true)
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [age, setAge] = useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value as string);


//   };


//   function setName(value: string): void {
//     throw new Error("Function not implemented.");
//   }

//   // function setName(value: string): void {
//   //   throw new Error("Function not implemented.");
//   // }

//   // const Menu ={
//   //   {title: "Dashboard" }
//   //   {title: "Page" }
//   //   {title:"Media" , spacing :true}
//   //   {

//   //   }

//   // }



//   return (



//     <main className=" flex bg-zinc-700 h-screen ">

//       <div className={`bg-slate-950 h-full p-5 pt-8 ${isOpen ? "w-72" : "w-20"}  duration-300 relative`}>
//         <BsFillArrowLeftCircleFill className={`text-white text-3xl absolute -right-3  border border-purple-900 cursor-pointer rounded-full ${isOpen && "rotate-180"} `}
//           onClick={() => setisOpen(!isOpen)} />

//         <div className="inline-flex">
//           <a href="#" className="flex items-center">
//             <Image
//               src="/logo.png"
//               width={200}
//               height={50}
//               alt="Picture of the author"

//             />
//           </a>
//         </div>


//         <div className={`flex items-center rounded-md  bg-slate-100 mt-6 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
//           <BsHouseCheck className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />
//           <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>HOME</span>
//         </div>
//         <div className={`flex items-center rounded-md  bg-slate-100 mt-6 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
//           <IoGameControllerOutline className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />
//           <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>Game</span>
//         </div>
//         <div className={`flex items-center rounded-md  bg-slate-100 mt-6 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
//           <MdPrivacyTip className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />
//           <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>Privacy</span>
//         </div>
//         <div className={`flex items-center rounded-md  bg-slate-100 mt-6 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
//           <MdTipsAndUpdates className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />
//           <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>Tips</span>
//         </div>







//         <div className={`flex items-center rounded-md  bg-red-400 mt-64 ${!isOpen ? "px-2.5" : "px-4"}  py-2 `}>
//           <a href="/login">
//             <IoLogOutOutline className={`text-lg font-semibold block float-left cursor-pointer text-black  ${isOpen && "mr-2"}`} />





//             <span className={`text-black px-6 font-semibold ${!isOpen && "hidden"}`}>LogOut</span>
//           </a>
//         </div>




//       </div>





//       {/* <div className="p-16 ml-6 "> */}
//         <div className="h-full w-full bg-slate-950  rounded-xl  ml-6   shadow-[0_0_10px_purple]">
//           <h1 className="flex  justify-center    text-3xl font-mono mt-7 text-white">
//           WELCOME MAB!
//           </h1>
//           <div className="flex flex-row justify-evenly gap-5 p-3 flex-wrap">

//             <div className="  ">



//               <label className="font-mono  text-slate-500 text-lg">Date</label>



//               {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//               <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Date..." type="date" name="date"


//               />


//             </div>


//             <div className="  ">



//               <label className="font-mono  text-slate-500 text-lg">FBID/URL</label>


//               <div className="">
//                 {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//                 <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="FBID/URL..." type="url" name="url"

//                 />

//               </div>

//             </div>
//             <div className="  ">



//               <label className="font-mono  text-slate-500 text-lg">FBID/URL</label>


//               <div className="">
//                 {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//                 <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="FBID/URL..." type="url" name="url"

//                 />

//               </div>

//             </div>




//             <div className="  ">



//               <label className="font-mono  text-slate-500 text-lg">Amount</label>


//               <div className="">
//                 {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//                 <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Amount..." type="number" name="name"
//                   defaultValue="0" // Set the default value here
//                   onChange={(e) => setName(e.target.value)}

//                 />

//               </div>
//             </div>




//           </div>
//           <div className="flex flex-row justify-evenly gap-5 p-3 flex-wrap">

//             <div className="  ">



//               <label className="font-mono  text-slate-500 text-lg">Date</label>



//               {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//               <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Date..." type="date" name="date"


//               />


//             </div>


//             <div className="  ">



//               <label className="font-mono  text-slate-500 text-lg">FBID/URL</label>


//               <div className="">
//                 {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//                 <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="FBID/URL..." type="url" name="url"

//                 />

//               </div>

//             </div>
//             <div className="  ">



//               <label className="font-mono  text-slate-500 text-lg">FBID/URL</label>


//               <div className="">
//                 {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//                 <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="FBID/URL..." type="url" name="url"

//                 />

//               </div>

//             </div>




//             <div className="  ">



//               <label className="font-mono  text-slate-500 text-lg">Amount</label>


//               <div className="">
//                 {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//                 <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Amount..." type="number" name="name"
//                   defaultValue="0" // Set the default value here
//                   onChange={(e) => setName(e.target.value)}

//                 />

//               </div>
//             </div>




//           </div>
//           <div className="flex flex-row justify-evenly gap-5 p-3 flex-wrap">

//             <div className="  ">



//               <label className="font-mono  text-slate-500 text-lg">Date</label>



//               {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//               <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Date..." type="date" name="date"


//               />


//             </div>


//             <div className="  ">



//               <label className="font-mono  text-slate-500 text-lg">FBID/URL</label>


//               <div className="">
//                 {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//                 <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="FBID/URL..." type="url" name="url"

//                 />

//               </div>

//             </div>
//             <div className="  ">



//               <label className="font-mono  text-slate-500 text-lg">FBID/URL</label>


//               <div className="">
//                 {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//                 <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="FBID/URL..." type="url" name="url"

//                 />

//               </div>

//             </div>




//             <div className="  ">



//               <label className="font-mono  text-slate-500 text-lg">Amount</label>


//               <div className="">
//                 {/* <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i> */}


//                 <input className="placeholder:italic mt-1 placeholder:text-slate-400 block bg-slate-950 h-10 w-60 border border-slate-400 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-400 focus:ring-1 sm:text-sm" placeholder="Amount..." type="number" name="name"
//                   defaultValue="0" // Set the default value here
//                   onChange={(e) => setName(e.target.value)}

//                 />

//               </div>
//             </div>




//           </div>

//           <div className="flex justify-center items-center  m-11">
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
          





//         </div>
//       {/* </div> */}






//     </main>

//   );
// }



import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const header = ['row1', 'row2', 'row3']

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const toto = () => (<TableHead>
    <TableRow>
        <StyledTableCell>{header[0]}</StyledTableCell>
        <StyledTableCell>{header[1]}</StyledTableCell>
        <StyledTableCell>{header[2]}</StyledTableCell>
    </TableRow>
</TableHead>)

export default toto



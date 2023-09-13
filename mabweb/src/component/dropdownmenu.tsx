"use client"
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import DropDown from '@/component/dropmenu';

// eslint-disable-next-line react-hooks/rules-of-hooks


function SideNavbar() {
  // const [Menu, setMenu] = useState(false)
  // return(
  //   <Box sx={{ flexGrow: 1 }}>
  //     <AppBar position="static">
  //       <Toolbar variant="dense" className="bg-slate-950">
  //         <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
  //         onClick={() => setMenu((prev) => !prev)}>

  //         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2f3760" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-justify  absolute"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/>
  //         </svg>
  //         {Menu &&(<DropDown/>)
  //                                       }

  //         </IconButton>
  //         <Typography variant="h6" color="inherit" component="div">
  //           <span className="text-white font-semibold">MAB SOLUTION</span>
  //         </Typography>
  //       </Toolbar>
  //     </AppBar>
  //   </Box>
  // )
  return (
    <div className="flex">
      <div className="bg-slate-950 h-full p-5"> slidebar</div>
      <div className="p-7"><h1 className="text-2xl font-semibold">hallo MAB</h1></div>
    </div>
  )

}

export default SideNavbar;
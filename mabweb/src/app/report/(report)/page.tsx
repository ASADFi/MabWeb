"use client"
import Table from "@/component/Table";
import Navbar from "@/component/nav";

export default function game() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    
    return (
        <main className="bg-zinc-600 h-screen flex">
            <title>MB SOLUTION |Report</title>
            <Navbar screenName="Report"/>

            <div className="flex justify-center items-center   w-full">
           <Table/>
            </div>

            
        </main>
    )
}
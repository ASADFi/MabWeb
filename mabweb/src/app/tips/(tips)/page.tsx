
import Navbar from "@/component/nav";

export default function game() {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    return (
        <main className="bg-zinc-600 h-screen flex">
            <title>MB SOLUTION |Tip</title>
            <Navbar screenName="Tips" />


            <div className="flex justify-center items-center   w-full">
                <h1 className=" w-56 flex justify-center items-center text-9xl font-semibold  text-slate-950">TIPS</h1>
            </div>



        </main>
    )
}
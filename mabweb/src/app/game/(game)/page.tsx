
import Navbar from "@/component/nav";

export default function game() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
 
    return (
        <main className="bg-zinc-600 h-screen flex">
            <title>MB SOLUTION |Game</title>
            <Navbar screenName="Game"  />
            <div className="flex justify-center items-center   w-full">
                <h1 className=" w-56 flex justify-center items-center text-9xl font-semibold  text-slate-950">GAMES</h1>
            </div>


        </main>
    )
}
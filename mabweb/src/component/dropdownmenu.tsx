import Link from "next/link";

const DropDown = () => {


    return (

        <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-white text-2xl font-bold">YouTube</a>
        </Link>
        <div className="flex space-x-4">
          <Link href="/trending">
            <a className="text-white hover:text-gray-400">Trending</a>
          </Link>
          <Link href="/subscriptions">
            <a className="text-white hover:text-gray-400">Subscriptions</a>
          </Link>
          <Link href="/library">
            <a className="text-white hover:text-gray-400">Library</a>
          </Link>
          <Link href="/history">
            <a className="text-white hover:text-gray-400">History</a>
          </Link>
        </div>
      </div>
    </nav>


    )

}


export default DropDown;

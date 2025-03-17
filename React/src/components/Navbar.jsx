import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-blue-400 text-white p-3 shadow-md w-[100%] h-[10%]">
        <div className="container ml-[5rem] flex justify-between items-center">
        <h1 className="text-xl font-bold">NavBar</h1>
        <ul className="flex gap-[1rem]">
            <li><a className="hover:underline">Home</a></li>
            <li><a className="hover:underline">About</a></li>
            <li><a className="hover:underline">Contact</a></li>
        </ul>
        </div>
        </nav>
    )
}

export default Navbar
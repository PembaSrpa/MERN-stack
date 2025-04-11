import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='bg-blue-400 text-white p-3 shadow-md w-[100%] sticky top-0 z-10'>
            <div className='container ml-[5rem] flex justify-between items-center'>
                <h1 className='text-xl font-bold'>NavBar</h1>
                <ul className='flex gap-[1rem]'>
                    <li>
                        <Link to='/' className='hover:underline'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/form' className='hover:underline'>
                            Form
                        </Link>
                    </li>
                    <li>
                        <Link to='/onoff' className='hover:underline'>
                            OnOff
                        </Link>
                    </li>
                    <li>
                        <Link to='/login' className='hover:underline'>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/product' className='hover:underline'>
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link to='register' className='hover:underline'>
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link to='/apifetch' className='hover:underline'>
                            ApiFetch
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

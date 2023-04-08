import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className=' bg-[#1C2B35]'>
            <div className='max-w-7xl mx-auto h-[80px] flex justify-between items-center px-[70px]'>
            <div>
                <Link to='/'><img src="../../../public/images/Logo.svg" alt="" /></Link>
            </div>
            <div className='text-white space-x-[32px]'>
                <NavLink to="/" className={({ isActive }) => isActive? "text-yellow-400 underline" : "" }>Shop</NavLink>
                <NavLink to="orders" className={({ isActive }) => isActive? "text-yellow-400 underline" : "" }>Orders</NavLink>
                <NavLink to="manage-inventory" className={({ isActive }) => isActive? "text-yellow-400 underline" : "" }>Manage Inventory</NavLink>
                <NavLink to="login" className={({ isActive }) => isActive? "text-yellow-400 underline" : "" }>Login</NavLink>
            </div>
            </div>  
        </nav>
    );
};

export default Navbar;
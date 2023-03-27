import React from 'react';

const Navbar = () => {
    return (
        <nav className=' bg-[#1C2B35]'>
            <div className='max-w-7xl mx-auto h-[80px] flex justify-between items-center px-[70px]'>
            <div>
                <img src="../../../public/images/Logo.svg" alt="" />
            </div>
            <div className='text-white space-x-[32px]'>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
            </div>  
        </nav>
    );
};

export default Navbar;
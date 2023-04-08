import React, { useState } from 'react';
import Cart from '../Shop/Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();

    const [cart, setCart] = useState(savedCart);

    const handleRemove = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
        
    }
    return (
        <div className='shop max-w-7xl mx-auto'>
             <div className='mt-[20px] md:mt-[50px] pl-[15px] md:pl-[70px] pr-5 grid grid-cols-1 gap-[10px]'>
                {
                   cart.map(product => <ReviewItems
                   key = {product.id}
                   product={product}
                   handleRemove = {handleRemove}
                   />)
                }
            </div>
            <div className=' bg-[rgba(255,153,0,0.30)] py-12'>
                <Cart cart = {cart} handleClearCart={handleClearCart}>
                <Link to="/checkout"><button className='bg-green-600 text-white w-[95%] mt-4 px-4 py-2 rounded-sm'>Proceed to checkout</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const Cart = (props) => {
    const {cart, handleClearCart, children} = props;
    // console.log(cart);
    
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const pro of cart){
        if(pro.quantity === 0){
            pro.quantity = 1;
        }
        total = total + pro.price * pro.quantity;
        totalShipping = totalShipping + pro.shipping;
        quantity = quantity + pro.quantity;
    }

    const tax = total*5 / 100;

    let grandTotal = total+totalShipping+tax;

   
    return (
        <div className='m-3 space-x-3 space-y-5 sticky top-0'>
            <h2 className='text-center mt-2 text-[25px]'>Order Summary</h2>
            <p className='mx-3'>Selected Items: {quantity}</p>
            <p>Total Price: <span className='font-semibold'>${total}</span></p>
            <p>Total shipping charge: <span className='font-semibold'>${totalShipping}</span></p>
            <p>Tax <span className='text-gray-500'>5% include</span>: <span className='font-semibold'>${tax.toFixed(2)}</span> </p>
            <p className='font-extrabold'>Grand total: <span className='font-semibold'>${grandTotal.toFixed(2)}</span></p>

            <div>
                <button onClick={handleClearCart} className='flex items-center bg-red-600 text-white w-[100%] px-4 py-2 rounded-sm justify-between'>Clear cart<TrashIcon className="h-6 w-6 cursor-pointer"/></button>
            </div>
            {children}
        </div>
    );
};

export default Cart;
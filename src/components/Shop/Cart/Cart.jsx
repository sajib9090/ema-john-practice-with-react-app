import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    
    let total = 0;
    let totalShipping = 0;
    for(const pro of cart){
        total = total + pro.price;
        totalShipping = totalShipping + pro.shipping;
    }

    const tax = total*5 / 100;

    let grandTotal = total+totalShipping+tax;

   
    return (
        <div className='m-3 space-x-3 space-y-5 sticky top-0'>
            <h2 className='text-center mt-2 text-[25px]'>Order Summary</h2>
            <p className='mx-3'>Selected Items: {cart.length}</p>
            <p>Total Price: <span className='font-semibold'>${total}</span></p>
            <p>Total shipping charge: <span className='font-semibold'>${totalShipping}</span></p>
            <p>Tax <span className='text-gray-500'>5% include</span>: <span className='font-semibold'>${tax.toFixed(2)}</span> </p>
            <p className='font-extrabold'>Grand total: <span className='font-semibold'>${grandTotal.toFixed(2)}</span></p>
        </div>
    );
};

export default Cart;
import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItems = ({product, handleRemove}) => {
    
    return (
        <div className='w-[580px] h-[110px] border border-[#cecece] py-4 mx-auto rounded-lg px-4 flex items-center'>
            <div>
                <img className='object-cover w-[91px] h-[91px]' src={product.img}/>
            </div>
            <div className='ml-4'>
                <h3>{product.name}</h3>
                <p>Price: <span className='text-[#fbc069] font-bold'>$ {product.price}</span></p>
                <p>Shipping charge: <span className='text-[#fbc069] font-bold'> {product.quantity}</span></p>
            </div>
            <div className='ml-auto'>
                <button onClick={()=> handleRemove(product.id)} className='bg-red-300 bg-opacity-50 rounded-full p-2'><TrashIcon className="h-6 w-6 text-red-500 cursor-pointer" /></button>
            </div>
        </div>
    );
};

export default ReviewItems;
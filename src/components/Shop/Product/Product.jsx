import React from 'react';


const Product = (props) => {
    // console.log(props.singleProduct);
    const {name, price, ratings, seller} = props.singleProduct;
    let addToCart =props.addToCart;

    return (
        <div>
            <div className='w-[290px] h-[508px] border border-[#95A0A7]-1 rounded-lg relative'>
                <img className='w-[100%] rounded-lg p-2' src={props.singleProduct?.img} alt="" />

                <div className='my-[5px] ml-[10px]'>
                    <div className='mb-4'>
                    <h3 className='text-[20px] font-semibold'>{name}</h3>
                    <p>Price: $<span className='font-bold'>{price}</span></p>
                    </div>
                    <div className='mb-0'>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} stars</p>
                    </div>
                </div>
                <button className='bg-[#FFE0B3] w-[100%] hover:bg-[#ffac30] duration-500 absolute bottom-0 py-3 rounded-b-lg text-base' onClick={()=> addToCart(props.singleProduct)}>Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;
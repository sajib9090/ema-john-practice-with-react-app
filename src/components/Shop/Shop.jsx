import React, { useEffect, useState } from 'react';
import '../Shop/Shop.css'
import Product from './Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`fakeData/products.json`)
          .then(res => res.json())
          .then(data => setProducts(data))
    } , [])
    return (
        <div className='shop max-w-7xl mx-auto'>
            <div className=' mt-[100px] pl-[70px] pr-5 grid grid-cols-1 md:grid-cols-3 gap-[30px]'>
                {
                    products.map(singleProduct => <Product 
                    singleProduct = {singleProduct}
                    key = {singleProduct.id}
                    />)
                }

            </div>
            <div className=' bg-[rgba(255,153,0,0.30)]'>

                <h2 className='text-center mt-7 text-[25px]'>Order Summary</h2>

            </div>
            
        </div>
    );
};

export default Shop;
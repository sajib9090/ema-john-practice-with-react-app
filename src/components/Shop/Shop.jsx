import React, { useEffect, useState } from 'react';
import '../Shop/Shop.css'
import Cart from './Cart/Cart';
import Product from './Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`fakeData/products.json`)
          .then(res => res.json())
          .then(data => setProducts(data))
    } , []);

    const addToCart = (singleProduct) => {
        const newCart = [...cart, singleProduct]
        setCart(newCart)
    }
    return (
        <div className='shop max-w-7xl mx-auto'>
            <div className='mt-[20px] md:mt-[100px] pl-[15px] md:pl-[70px] pr-5 grid grid-cols-1 md:grid-cols-3 gap-[30px]'>
                {
                    products.map(singleProduct => <Product 
                    singleProduct = {singleProduct}
                    key = {singleProduct.id}
                    addToCart = {addToCart}
                    />)
                }

            </div>
            <div className=' bg-[rgba(255,153,0,0.30)] py-12'>
                <Cart cart = {cart}/>

            </div>
            
        </div>
    );
};

export default Shop;
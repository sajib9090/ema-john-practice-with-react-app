import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
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

    useEffect( () => {
        const storedCart = getShoppingCart();
        // console.log(storedCart);
        const savedCart = [];

         //step-1 get id of the addedProduct
        for(const id in storedCart){
            // console.log(id);

            //step-2 get product from products state by using id

            const addedProduct = products.find(product => product.id === id);
            // console.log(addedProduct);

           
            if(addedProduct){

                //step-3 add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                // step-4 add the added product to the savedCart
                savedCart.push(addedProduct);
            }
            
        }
        //step-5 set the cart
        setCart(savedCart);
    }, [products])

    const addToCart = (singleProduct) => {
        const newCart = [...cart, singleProduct];
        setCart(newCart);
        addToDb(singleProduct.id)

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
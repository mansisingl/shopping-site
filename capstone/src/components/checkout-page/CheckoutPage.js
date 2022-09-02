import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import CheckoutItem from '../checkout-item/CheckoutItem';
import './CheckoutPage.scss';

const CheckoutPage = () => {
    const {cartItems, totalAmount} = useContext(CartContext);
  return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map((cartItem) => (
         <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))}
        <span className='total'>total ${totalAmount}</span>
    </div>
  )
}

export default CheckoutPage




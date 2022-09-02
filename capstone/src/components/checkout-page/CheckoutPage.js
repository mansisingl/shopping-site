import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import './CheckoutPage.scss';

const CheckoutPage = () => {
    const {cartItems} = useContext(CartContext);
    const {name, price, imageUrl} = cartItems;
  return (
    <div>
      {cartItems.map((cartItem) => {
        <div>
            <img src={imageUrl} alt={`${name}`}/>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
      })}
    </div>
  )
}

export default CheckoutPage

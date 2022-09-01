import React, { useContext } from 'react'
import './CartIcon.scss';
import { ReactComponent as ShoppingBag } from '../../assets/shopping.svg';
import { CartContext } from '../../context/CartContext';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingBag className='shopping-icon'/>
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon

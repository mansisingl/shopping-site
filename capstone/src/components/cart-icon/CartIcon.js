import React from 'react'
import './CartIcon.scss';
import { ReactComponent as ShoppingBag } from '../../assets/shopping.svg';

const CartIcon = () => {
  return (
    <div className='cart-icon-container'>
      <ShoppingBag className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon

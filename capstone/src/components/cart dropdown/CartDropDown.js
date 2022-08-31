import React from 'react'
import Button from '../button/Button';
import CartItem from '../cart-items/CartItem';
import './CartDropDown.scss';

const CartDropDown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {[].map((item) => <CartItem cartItem={item} />) }
        </div>
        <Button>Go to checkout</Button>
      
    </div>
  )
}

export default CartDropDown;

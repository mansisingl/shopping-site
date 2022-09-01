import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import Button from '../button/Button';
import CartItem from '../cart-items/CartItem';
import './CartDropDown.scss';

const CartDropDown = () => {
  const {cartItems} = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            )) }
        </div>
        <Button>Go to checkout</Button> 
    </div>
  )
}

export default CartDropDown;

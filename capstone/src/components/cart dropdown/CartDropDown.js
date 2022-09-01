import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import Button from '../button/Button';
import CartItem from '../cart-items/CartItem';
import './CartDropDown.scss';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () => {
  const navigate = useNavigate();
  const {cartItems} = useContext(CartContext)

  const goToCheckOutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            )) }
        </div>
        <Button onClick={goToCheckOutHandler}>Go to checkout</Button> 
    </div>
  )
}

export default CartDropDown;

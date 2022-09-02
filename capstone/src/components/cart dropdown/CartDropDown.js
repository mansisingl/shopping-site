import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Button from '../button/Button';
import CartItem from '../cart-items/CartItem';
import './CartDropDown.scss';

const CartDropDown = () => {
  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate()
  const goToCheckout = () => {
    navigate('/check-out')
  }

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map((item) => <CartItem item={item} key={item.id} />) }
        </div>
        <Button onClick={goToCheckout}>Go to checkout</Button>
      
    </div>
  )
}

export default CartDropDown;

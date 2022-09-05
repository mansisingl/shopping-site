import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Button from '../button/Button';
import CartItem from '../cart-items/CartItem';
import {CartDropDownContainer, EmptyMessage, CartItems} from './CartDropDown.styled';

const CartDropDown = () => {
  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate();
  
  const goToCheckout = () => {
    navigate('/check-out')
  }

  return (
    <CartDropDownContainer>
        <CartItems>
            { cartItems.length ?
            (cartItems.map((item) => <CartItem item={item} key={item.id} />)
            ) : (
              <EmptyMessage>Your Cart Is Empty</EmptyMessage>
            )}
        </CartItems>
        <Button onClick={goToCheckout}>Go to checkout</Button>
      
    </CartDropDownContainer>
  )
}

export default CartDropDown;

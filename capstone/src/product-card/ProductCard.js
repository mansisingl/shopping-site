import './ProductCard.scss';

import React, { useContext } from 'react'
import Button from '../components/button/Button';
import { CartContext } from '../context/CartContext';


const ProductCard = ({product}) => {
  const {name, price, imageUrl} = product;
 const {addItemToCart} = useContext(CartContext);

 const addProductToCart = () => addItemToCart(product)

  return (
    <div className='product-card-container'>
      <img src={`${imageUrl}`} alt={`${name}`}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        <Button onClick={()=>addItemToCart(product)} buttonType='inverted'>Add To Cart</Button>
      </div>
    </div>
  )
}

export default ProductCard

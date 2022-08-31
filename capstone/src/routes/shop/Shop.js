import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'


const Shop = () => {
    const {products} = useContext(ProductsContext)
  return (
    <div>
      {products.map((product) => {
        return <h3 key={product.id}>{product.name}</h3>
      })}
    </div>
  )
}

export default Shop

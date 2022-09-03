import React, { Fragment, useContext } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'
import ProductCard from '../../product-card/ProductCard'
import './Shop.scss';

const Shop = () => {
    const {categoriesMap} = useContext(CategoriesContext)
  return (
    <Fragment >
    {
      Object.keys(categoriesMap).map(title => {
        return<Fragment key={title}>
          <h2>{title}</h2>
          <div className='products-container'>
            {categoriesMap[title]
            .filter((_, idx) => idx<4)
            .map((product) => {
              return <ProductCard key={product.id} product={product}/>
            })}
          </div>
        </Fragment>
      })
    }
    </Fragment>
    
  )
}

export default Shop

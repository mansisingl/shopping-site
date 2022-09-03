import React, { Fragment, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import CategoryPreview from '../../components/category-preview/CategoryPreview';
import { CategoriesContext } from '../../context/CategoriesContext'
import ProductCard from '../../product-card/ProductCard'
import './Shop.scss';

const Shop = () => {
    const {categoriesMap} = useContext(CategoriesContext)
    const {title} = useParams()
  return (
    <div className='shop-container'>
    {
      Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return <CategoryPreview products={products} key={title} title={title} />
      })
    }
    </div>
    
  )
}

export default Shop

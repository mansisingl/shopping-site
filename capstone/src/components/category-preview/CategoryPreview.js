import React from 'react'
import ProductCard from '../../product-card/ProductCard';
import './CategoryPreview.scss';


const CategoryPreview = ({title, products}) => {
  return (
    <div className='category-preview-container'>
        <h2>
            <span className='title'>{title}</span>
        </h2>
        <div className='preview'>
            {
                products
                .filter((_, idx) => idx<4)
                .map((product) => <ProductCard product={product} key={product.id} />)
            }
        </div>
    </div>
  )
}

export default CategoryPreview;

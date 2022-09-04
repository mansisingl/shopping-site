import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/CategoriesContext';
import ProductCard from '../../product-card/ProductCard';
import './Category.scss';

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

  return (
    <div>
        <h2 className='category-title'>{category}</h2>
        <div className='category-container'>
        { products &&
            products.map((product) => {
            return (
                <div>
                <ProductCard key={product.id} product={product} />
                </div>
            )})
        }
        </div>
    </div>
    
  )
}

export default Category

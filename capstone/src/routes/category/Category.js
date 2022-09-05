import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/CategoriesContext';
import ProductCard from '../../product-card/ProductCard';

import { CategoryContainer, CategoryTitle } from './Category.styled';

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

  return (
    <div>
        <CategoryTitle >{category}</CategoryTitle>
        <CategoryContainer>
        { products &&
            products.map((product) => {
            return (
                <div>
                <ProductCard key={product.id} product={product} />
                </div>
            )})
        }
        </CategoryContainer>
    </div>
    
  )
}

export default Category

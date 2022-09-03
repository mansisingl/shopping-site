
import { useContext } from 'react';
import CategoryPreview from '../components/category-preview/CategoryPreview';
import { CategoriesContext } from '../context/CategoriesContext';
import './CategoriesPreview.scss';

const CategogiesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)
  return (
    <>
    {
      Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return <CategoryPreview products={products} key={title} title={title} />
      })
    }
    </>
    
  )
}

export default CategogiesPreview;

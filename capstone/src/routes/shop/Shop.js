
import { Link, useParams, Route, Routes } from 'react-router-dom';
import CategogiesPreview from '../../categories-preview/CategoriesPreview';
import Category from '../category/Category';

import './Shop.scss';

const Shop = () => {
    
  return (
    <Routes>
      <Route index element={<CategogiesPreview/>}/>
      <Route path=':category' element={<Category/>}/>
    </Routes>
  )
}

export default Shop

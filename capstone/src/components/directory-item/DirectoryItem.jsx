// import { Link } from 'react-router-dom';
import {BgImage, Body, DirectoryItemContainer, } from './DirectoryItem.styles';


const DirectoryItem = ({category: {title,imageUrl}}) => {
  return (
    <DirectoryItemContainer to={`/shop/${title}`}>
      <BgImage imageUrl={imageUrl} />
      
      <Body>
          <h2>{title.toUpperCase()}</h2>
          <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem

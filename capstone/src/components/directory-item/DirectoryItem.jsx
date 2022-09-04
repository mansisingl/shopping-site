import { Link } from 'react-router-dom';
import './DirectoryItem.scss';


const DirectoryItem = ({category: {title,imageUrl}}) => {
  return (
    <Link to={`/shop/${title}`} className="directory-item-container">
      <div className='background-image' style={{
      backgroundImage: `url(${imageUrl})`
      }}/>
      <div className="body">
          <h2>{title.toUpperCase()}</h2>
          <p>Shop Now</p>
      </div>
    </Link>
  )
}

export default DirectoryItem

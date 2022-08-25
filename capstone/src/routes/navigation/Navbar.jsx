import React, {useContext} from 'react'
import './Navigation.scss';
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crwn.svg';
import { UserContext } from '../../context/UserContext';
const Navbar = () => {
    const {currentUser} = useContext(UserContext)
    console.log('currentUser', currentUser)
  return (
    <>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrownLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>SHOP</Link>
                <Link className='nav-link' to='/authentication'>SIGN IN</Link>
            </div>  
        </div>
        <div>
            <Outlet/>
        </div>
    </>
  )
}

export default Navbar

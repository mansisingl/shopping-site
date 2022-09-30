import React, {useContext} from 'react'
import './Navigation.scss';
import { Link, Outlet } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';
import { signOutUser } from '../../utils/firebase/Firebase.utils';
import { ReactComponent as CrownLogo } from '../../assets/crwn.svg';
const Navbar = () => {

    const {currentUser} = useContext(UserContext)
  return (
    <>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrownLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>SHOP</Link>
                {currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>SIGN OUT{''}</span>
                ) : (
                    <Link className='nav-link' to='/authentication'>SIGN IN</Link>
                )}
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

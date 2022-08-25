import React, {useContext} from 'react'
import './Navigation.scss';
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crwn.svg';
import { UserContext } from '../../context/UserContext';
import { signOutUser } from '../../utils/firebase/Firebase.utils';


const Navbar = () => {
    const {setCurrentUser, currentUser} = useContext(UserContext)
    console.log('currentUser', currentUser)

    const signOutHandler = async () => {
       await signOutUser();
       setCurrentUser(null)
    }

  return (
    <>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrownLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>SHOP</Link>
                {currentUser ? (
                    <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
                ) : (
                    <Link className='nav-link' to='/authentication'>SIGN IN</Link>
                )}
            </div>  
        </div>
        <div>
            <Outlet/>
        </div>
    </>
  )
}

export default Navbar

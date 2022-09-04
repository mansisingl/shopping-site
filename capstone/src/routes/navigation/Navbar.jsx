import React, {useContext} from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crwn.svg';
import { UserContext } from '../../context/UserContext';
import { signOutUser } from '../../utils/firebase/Firebase.utils';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropDown from '../../components/cart dropdown/CartDropDown';
import { CartContext } from '../../context/CartContext';

import {NavigationContainer, NavigationLinksContainer, LogoContainer, NavLink} from './Navigation.styles';

const Navbar = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

   

  return (
    <>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrownLogo className='logo'/>
            </LogoContainer>
            <NavigationLinksContainer>
                <NavLink to='/shop'>SHOP</NavLink>
                {currentUser ? (
                    <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                ) : (
                    <NavLink to='/authentication'>SIGN IN</NavLink>
                )}
                <CartIcon/>
            </NavigationLinksContainer>  
            {isCartOpen && <CartDropDown/>}
        </NavigationContainer>
        <Outlet/>
    </>
  )
}

export default Navbar

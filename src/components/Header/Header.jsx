
import React from 'react';
import  Navigation  from '../Navigation/Navigation';
import  AuthNav  from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../store/auth/authSelectors';
import css from './header.module.css'
const Header = () => {
const isLogedIn = useSelector(selectIsLoggedIn);
  return ( 
    <div className={css.headerBox}>
      <Navigation />
      {isLogedIn ? <UserMenu /> : <AuthNav />}
    </div>  
  );
};

export default Header;
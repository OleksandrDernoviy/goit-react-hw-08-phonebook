

import { NavLink } from 'react-router-dom';
import css from './authNav.module.css';
const navStyAuth = ({ isActive }) => `${isActive ? css.active : ''}`;
 const AuthNav = () => {
  return (
    <nav className={css.authNavBox}>
      <NavLink className={navStyAuth} to="/register">
        Registration
      </NavLink>
      <NavLink className={navStyAuth} to="/login">
        Login
      </NavLink>
    </nav>
  );
};
export default AuthNav;

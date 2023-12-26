

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './navigation.module.css';
import { selectIsLoggedIn } from '../../store/auth/authSelectors';


 const Navigation = () => {
 const isLoggedIn = useSelector(selectIsLoggedIn);
const navStyleHeader = ({ isActive }) => `${isActive ? css.active : ''}`;
  return (
    <nav className={css.navBox}>
      <NavLink className={navStyleHeader} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={navStyleHeader} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

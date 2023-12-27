
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../store/auth/authOperations';
import { selectUserName } from '../../store/auth/authSelectors';
import css from './userMenu.module.css';

 const UserMenu = () => {
  const dispatch = useDispatch();
     const userName = useSelector(selectUserName);
  return (
    <div className={css.userBox}>
      {/* <div><img src=''/></div> */}
      <p className={css.userName}>
        <span className={css.userNameSpan}>Welcome </span>
        {userName}
      </p>
      <button
        className={css.btnLogOut}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;


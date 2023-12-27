import { useDispatch } from 'react-redux';
import { logIn } from '../../store/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.logForm} onSubmit={handleSubmit} autoComplete="off">
      <h2 className={css.logFormTitle}>Log In</h2>
      <label className={css.logFormLabel}>
        Email
        <input className={css.logFormInput} type="email" name="email" />
      </label>
      <label className={css.logFormLabel}>
        Password
        <input className={css.logFormInput} type="password" name="password" />
      </label>
      <button className={css.logFormBtn} type="submit">
        Log In
      </button>
    </form>
  );
};












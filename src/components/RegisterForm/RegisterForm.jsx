
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {register} from '../../store/auth/authOperations'
import css from './RegisterForm.module.css'

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeInput = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'email':
        setEmail(e.currentTarget.value);
        break;
      case 'password':
        setPassword(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.regForm} onSubmit={onSubmitForm}>
      <h2 className={css.regFormTitle}>Registration</h2>
      <label className={css.regFormLable}>
        Name
        <input
          className={css.regFormInput}
          type="name"
          name="name"
          required
          value={name}
          onChange={handleChangeInput}
        />
      </label>
      <label className={css.regFormLable}>
        Email
        <input
          className={css.regFormInput}
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChangeInput}
        />
      </label>
      <label className={css.regFormLable}>
        Password
        <input
          className={css.regFormInput}
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChangeInput}
        />
      </label>
      <button className={css.regFormBtn} type="submit">
        Registration
      </button>
    </form>
  );
};

export default RegisterForm;

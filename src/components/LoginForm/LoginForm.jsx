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








// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import {logIn} from '../../store/auth/authOperations'

// export const LoginForm = () => {
//   const dispatch = useDispatch();
  
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChangeInput = e => {
//     switch (e.currentTarget.name) {
//       case 'email':
//         setEmail(e.currentTarget.value);
//         break;
//       case 'password':
//         setPassword(e.currentTarget.value);
//         break;
//       default:
//         return;
//     }
//   };

 
//   const onSubmitForm = e => {
//     e.preventDefault();
//     dispatch(logIn({ email, password }));
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <form onSubmit={onSubmitForm}>
//       <h2>Log In</h2>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             required
//             value={email}
//             onChange={handleChangeInput}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             required
//             value={password}
//             onChange={handleChangeInput}
//           />
//         </label>
//       <button type="submit">Log In</button>
//     </form>
//   );
// };




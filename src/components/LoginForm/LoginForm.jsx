

import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../../store/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(logIn(values));
          resetForm();
        }}
      >
        <Form className={css.logForm} autoComplete="off">
          <h2 className={css.logFormTitle}>Log In</h2>
          <label className={css.logFormLabel}>
            Email
            <Field
              className={css.logFormInput}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>
          <label className={css.logFormLabel}>
            Password
            <Field
              className={css.logFormInput}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="div" className={css.error} />
          </label>
          <button className={css.logFormBtn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    );
  };























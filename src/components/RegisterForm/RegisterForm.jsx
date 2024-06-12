

import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // імпорт Yup для валідації
import { register } from '../../store/auth/authOperations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Required'),
      })}
     
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        try {
          await dispatch(register(values)).unwrap();
          resetForm();
        } catch (error) {
          console.error('Registration error:', error);
        } finally {
          setSubmitting(false); 
        }
      }}
    >
      <Form className={css.regForm}>
        <h2 className={css.regFormTitle}>Registration</h2>
        <label className={css.regFormLable}>
          Name
          <Field
            className={css.regFormInput}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>
        <label className={css.regFormLable}>
          Email
          <Field
            className={css.regFormInput}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" component="div" className={css.error} />
        </label>
        <label className={css.regFormLable}>
          Password
          <Field
            className={css.regFormInput}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="div" className={css.error} />
        </label>
        <button className={css.regFormBtn} type="submit">
          Registration
        </button>
      </Form>
    </Formik>
  );
};






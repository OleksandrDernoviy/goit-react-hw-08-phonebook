import { LoginForm } from 'components/LoginForm/LoginForm'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  return (
    <>
      <ToastContainer />
      <LoginForm />
    </>
  );
}

export default LoginPage
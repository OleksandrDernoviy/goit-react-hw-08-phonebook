import { RegisterForm } from 'components/RegisterForm/RegisterForm'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterPage = () => {
  return (
    <>
      <ToastContainer />
      <RegisterForm />
    </>
  );
}

export default RegisterPage
import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginRegister from '../components/LoginRegister';
import routes from '../routes';

export default function LoginRegisterPage() {
  return (
    <>
      <Redirect to={routes.AUTH_LOGIN.path} />
      <LoginRegister />
    </>
  );
}

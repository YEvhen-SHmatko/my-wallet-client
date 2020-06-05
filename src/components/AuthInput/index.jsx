import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Context from '../../hooks/context';
import Styles from './index.module.css';
import routes from '../../routes';

const AuthInput = () => {
  const { set, get } = useContext(Context);
  const AUTH_REGISTER = useLocation().pathname === routes.AUTH_REGISTER.path;
  const handleChange = e => {
    const { name, value } = e.target;
    set()[name](value);
  };
  return (
    <form className={Styles.form}>
      {AUTH_REGISTER && (
        <>
          <label htmlFor="firstName" className={Styles.label}>
            Имя
            <input
              id="firstName"
              autoComplete="off"
              className={Styles.input}
              type="firstName"
              name="FirstName"
              onChange={handleChange}
              value={get().firstName}
              placeholder="Имя"
            />
          </label>
          <label htmlFor="lastName" className={Styles.label}>
            Фамилия
            <input
              id="lastName"
              autoComplete="off"
              className={Styles.input}
              type="lastName"
              name="LastName"
              onChange={handleChange}
              value={get().lastName}
              placeholder="Фамилия"
            />
          </label>
        </>
      )}
      <label htmlFor="email" className={Styles.label}>
        Электронная почта
        <input
          id="email"
          autoComplete="off"
          className={Styles.input}
          type="email"
          name="Email"
          onChange={handleChange}
          value={get().email}
          placeholder="Your@email.com"
        />
      </label>
      <label htmlFor="password" className={Styles.label}>
        Пароль
        <input
          id="password"
          autoComplete="off"
          className={Styles.input}
          type="password"
          name="Password"
          onChange={handleChange}
          value={get().password}
          placeholder="Пароль"
        />
      </label>
    </form>
  );
};

export default AuthInput;

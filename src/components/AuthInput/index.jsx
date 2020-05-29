import React from 'react';
import Styles from './index.module.css';

const AuthInput = () => {
  return (
    <div className={Styles.form}>
      <label htmlFor="email" className={Styles.label}>
        Электронная почта
        <input
          id="email"
          autoComplete="off"
          className={Styles.input}
          type="email"
          name="email"
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
          name="password"
          placeholder="Пароль"
        />
      </label>
    </div>
  );
};

export default AuthInput;

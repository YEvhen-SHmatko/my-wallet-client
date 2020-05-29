import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './index.module.css';

const NavAuth = () => {
  return (
    <section className={Styles.section}>
      <NavLink to="/" className={Styles.link} activeClassName={Styles.active}>
        Войти
      </NavLink>
      <NavLink
        to="/auth/register"
        className={Styles.link}
        activeClassName={Styles.active}
      >
        Регистрация
      </NavLink>
    </section>
  );
};
export default NavAuth;

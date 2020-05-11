import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './index.module.css';

export default function index() {
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
}

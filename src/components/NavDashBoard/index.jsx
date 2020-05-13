import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './index.module.css';
import routes from '../../routes';

export default function index() {
  return (
    <section className={Styles.section}>
      <NavLink
        to={routes.Expenses.path}
        className={Styles.link}
        activeClassName={Styles.active}
      >
        Расходы
      </NavLink>
      <NavLink
        to={routes.Income.path}
        className={Styles.link}
        activeClassName={Styles.active}
      >
        Доходы
      </NavLink>
    </section>
  );
}

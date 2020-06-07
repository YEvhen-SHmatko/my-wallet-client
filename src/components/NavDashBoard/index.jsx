import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import operations from '../../redux/operations/isExpenses';
import Styles from './index.module.css';
import routes from '../../routes';

const NavDashBoard = ({ setIsExpenses }) => {
  const handleExpenses = () => {
    setIsExpenses(true);
  };
  const handleIncome = () => {
    setIsExpenses(false);
  };
  return (
    <section className={Styles.section}>
      <NavLink
        to={routes.Expenses.path}
        className={Styles.link}
        activeClassName={Styles.active}
        onClick={handleExpenses}
      >
        Расходы
      </NavLink>
      <NavLink
        to={routes.Income.path}
        className={Styles.link}
        activeClassName={Styles.active}
        onClick={handleIncome}
      >
        Доходы
      </NavLink>
    </section>
  );
};
NavDashBoard.propTypes = {
  setIsExpenses: PropTypes.func.isRequired,
};
export default connect(null, { setIsExpenses: operations })(NavDashBoard);

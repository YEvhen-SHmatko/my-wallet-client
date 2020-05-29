import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const Button = ({ title, onClick }) => (
  <button className={Styles.btn} type="button" onClick={onClick}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;

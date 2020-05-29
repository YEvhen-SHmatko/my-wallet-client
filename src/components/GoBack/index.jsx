import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from './index.module.css';
import { Default } from '../../services/mediaQuery';

const Static = () => {
  return (
    <>
      <svg
        className={Styles.goBack_icon}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
      </svg>
      <Default>
        <span className={Styles.text}>Вернуться на главную</span>
      </Default>
    </>
  );
};
const index = ({ onClick, to }) => {
  if (to) {
    return (
      <Link className={Styles.link} to={to}>
        <Static />
      </Link>
    );
  }
  return (
    <button type="button" className={Styles.btn} onClick={onClick}>
      <Static />
    </button>
  );
};
index.defaultProps = {
  onClick: () => false,
  to: false,
};
index.propTypes = {
  onClick: PropTypes.func,
  to: PropTypes.string,
};
export default index;

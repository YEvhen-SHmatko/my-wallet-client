import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const index = ({ title, onClick }) => (
  <button className={Styles.btn} type="button" onClick={onClick}>
    {title}
  </button>
);

index.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default index;

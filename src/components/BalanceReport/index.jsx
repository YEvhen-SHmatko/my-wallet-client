import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const index = ({ value, date }) => {
  return (
    <div className={Styles.section}>
      <div className={Styles.title}>{`Баланс на ${date}:`}</div>
      <span className={Styles.value}>{`${value}.00 UAN`}</span>
    </div>
  );
};
index.defaultProps = {
  value: 0,
  date: '17.05.1991',
};
index.propTypes = {
  value: PropTypes.number,
  date: PropTypes.string,
};
export default index;

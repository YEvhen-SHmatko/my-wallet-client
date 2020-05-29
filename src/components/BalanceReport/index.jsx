import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import Styles from './index.module.css';
import { isDefault } from '../../services/mediaQuery';

const BalanceReport = ({ value, date }) => {
  const IsDefault = isDefault(useMediaQuery);
  return (
    <div className={IsDefault ? Styles.Default_section : Styles.section}>
      <div
        className={IsDefault ? Styles.Default_title : Styles.title}
      >{`Баланс на ${date}:`}</div>
      <span
        className={IsDefault ? Styles.Default_value : Styles.value}
      >{`${value}.00 UAN`}</span>
    </div>
  );
};
BalanceReport.defaultProps = {
  value: 0,
  date: '17.05.1991',
};
BalanceReport.propTypes = {
  value: PropTypes.number,
  date: PropTypes.string,
};
export default BalanceReport;

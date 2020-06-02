import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import Moment from 'react-moment';
import * as selectors from '../../redux/selectors';
import Styles from './index.module.css';
import { isDefault } from '../../services/mediaQuery';
import { currency } from '../../services/locale';

import 'moment-timezone';

const BalanceReport = ({ balance, date }) => {
  const IsDefault = isDefault(useMediaQuery);
  return (
    <div className={IsDefault ? Styles.Default_section : Styles.section}>
      <div className={IsDefault ? Styles.Default_title : Styles.title}>
        <span className={Styles.title_text}>Баланс на</span>
        <Moment date={new Date()} format="DD.MM.YYYY" />:
      </div>
      <span
        className={IsDefault ? Styles.Default_value : Styles.value}
      >{`${balance.toFixed(2)} ${currency}`}</span>
    </div>
  );
};

BalanceReport.defaultProps = {
  balance: 0,
};
BalanceReport.propTypes = {
  balance: PropTypes.number,
};
const MSTP = store => ({
  balance: selectors.getBalance(store),
});
export default connect(MSTP)(BalanceReport);

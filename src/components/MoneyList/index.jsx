import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import * as selectors from '../../redux/selectors';
import { isDefault } from '../../services/mediaQuery';
import { transformMoney } from '../../services/hendlers';
import Wrapper from '../Wrapper';
import Styles from './index.module.css';

const MoneyList = ({ income, expens }) => {
  const IsDefault = isDefault(useMediaQuery);
  return (
    <Wrapper>
      <div className={Styles.section}>
        <div className={IsDefault ? Styles.Default_item : Styles.Mobile_item}>
          <div
            className={IsDefault ? Styles.Default_title : Styles.Mobile_title}
          >
            Расходы:
          </div>
          <div className={Styles.minus}>{transformMoney(expens, true)}</div>
        </div>
        <div className={IsDefault ? Styles.Default_item : Styles.Mobile_item}>
          <div
            className={IsDefault ? Styles.Default_title : Styles.Mobile_title}
          >
            Доходы:
          </div>
          <div className={Styles.value}>{transformMoney(income)}</div>
        </div>
      </div>
    </Wrapper>
  );
};

MoneyList.defaultProps = {
  expens: 18000.0,
  income: 45000.0,
};
MoneyList.propTypes = {
  expens: PropTypes.number,
  income: PropTypes.number,
};
const MSTP = store => ({
  expens: selectors.getMonthCosts(store),
  income: selectors.getMonthIncomes(store),
});
export default connect(MSTP, null)(MoneyList);

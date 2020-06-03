import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import period from '../../redux/operations/period';
import * as selectors from '../../redux/selectors';
import Styles from './index.module.css';
import { Default } from '../../services/mediaQuery';
import { thisDate } from '../../services/hendlers';
import IconArrow from './IconArrow';

const Period = ({ month, year, setPeriod }) => {
  const increment = () => {
    if (month === 12) {
      setPeriod({ year: year + 1, month: 1 });
      return;
    }
    setPeriod({ month: month + 1 });
  };
  const decrement = () => {
    if (month === 1) {
      setPeriod({ year: year - 1, month: 12 });
    }
    setPeriod({ month: month - 1 });
  };
  return (
    <div className={Styles.section}>
      <Default>Текущий период:</Default>
      <div className={Styles.month_section}>
        <button type="button" className={Styles.btn} onClick={decrement}>
          <IconArrow className={[Styles.svg, Styles.svgLeft].join(' ')} />
        </button>
        <span>{thisDate({ year, month }).format('MMM YYYY')}</span>
        <button type="button" className={Styles.btn} onClick={increment}>
          <IconArrow className={Styles.svg} />
        </button>
      </div>
    </div>
  );
};
Period.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  setPeriod: PropTypes.func.isRequired,
};
const MSTP = store => ({
  month: selectors.getPeriod(store).month,
  year: selectors.getPeriod(store).year,
});
export default connect(MSTP, { setPeriod: period })(Period);

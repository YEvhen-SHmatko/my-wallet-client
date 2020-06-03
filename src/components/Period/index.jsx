import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import period from '../../redux/operations/period';
import * as selectors from '../../redux/selectors';
import 'moment/locale/ru';
import Styles from './index.module.css';
import { Default } from '../../services/mediaQuery';
import IconArrow from './IconArrow';

const Period = ({ month, year, setPeriod }) => {
  const increment = () => {
    if (month === 12) {
      setPeriod({ year: 12, month: 1 });
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
  const data = moment(new Date());
  data.locale('ru');
  data.year(year);
  data.month(month);
  return (
    <div className={Styles.section}>
      <Default>Текущий период:</Default>
      <div className={Styles.month_section}>
        <button type="button" className={Styles.btn} onClick={decrement}>
          <IconArrow className={[Styles.svg, Styles.svgLeft].join(' ')} />
        </button>
        <span>{data.format('MMM YYYY')}</span>
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

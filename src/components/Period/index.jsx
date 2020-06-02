import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';
import Styles from './index.module.css';
import { Default } from '../../services/mediaQuery';
import IconArrow from './IconArrow';

const Period = () => {
  const [year, setYear] = useState(2020);
  const [month, setMonth] = useState(1);
  const increment = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
      return;
    }
    setMonth(month + 1);
  };
  const decrement = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
      return;
    }
    setMonth(month - 1);
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

export default Period;

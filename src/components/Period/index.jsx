import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Styles from './index.module.css';
import { Default } from '../../services/mediaQuery';
import IconArrow from './IconArrow';

const Period = ({ month, year, increment, decrement }) => {
  return (
    <div className={Styles.section}>
      <Default>Текущий период:</Default>
      <div className={Styles.month_section}>
        <button type="button" className={Styles.btn} onClick={decrement}>
          <IconArrow className={[Styles.svg, Styles.svgLeft].join(' ')} />
        </button>
        <span>
          {month} {year}
        </span>
        <button type="button" className={Styles.btn} onClick={increment}>
          <IconArrow className={Styles.svg} />
        </button>
      </div>
    </div>
  );
};

Period.defaultProps = {
  month: 'май',
  year: '1991',
  increment: () => console.log('increment'),
  decrement: () => console.log('decrement'),
};
Period.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};
export default Period;

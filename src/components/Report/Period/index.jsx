import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';
import { Default } from '../../../services/media-query';

const IconArrow = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M10 17l5-5-5-5v10z" />
    <path fill="none" d="M0 24V0h24v24H0z" />
  </svg>
);
const index = ({ month, year, increment, decrement }) => {
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

index.defaultProps = {
  month: 'май',
  year: '1991',
  increment: () => console.log('increment'),
  decrement: () => console.log('decrement'),
};
index.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};
export default index;

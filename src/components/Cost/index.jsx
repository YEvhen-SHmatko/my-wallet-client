import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';
import Styles from './index.module.css';

const Cost = ({ cost }) => {
  const IsMobile = isMobile(useMediaQuery);
  const IsTablet = isTablet(useMediaQuery);
  const color = cost.includes('-')
    ? 'red'
    : cost.includes('+')
    ? 'green'
    : 'black';
  return (
    <div
      className={
        IsMobile
          ? Styles.Mobile_section
          : IsTablet
          ? Styles.Tablet_section
          : Styles.Desktop_section
      }
      style={{ color }}
    >
      {cost}
    </div>
  );
};

Cost.propTypes = {
  cost: PropTypes.string.isRequired,
};
export default Cost;

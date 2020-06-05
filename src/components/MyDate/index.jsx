import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';
import Styles from './index.module.css';
import { thisDate } from '../../services/hendlers';

const MyDate = ({ date, title }) => {
  const IsMobile = isMobile(useMediaQuery);
  const IsTablet = isTablet(useMediaQuery);
  return (
    <div
      className={
        IsMobile
          ? Styles.Mobile_section
          : IsTablet
          ? Styles.Tablet_section
          : Styles.Desktop_section
      }
    >
      {title ? date : thisDate(date).format('YYYY.MM.DD')}
    </div>
  );
};

MyDate.defaultProps = {
  title: false,
};

MyDate.propTypes = {
  title: PropTypes.bool,
  date: PropTypes.string.isRequired,
};
export default MyDate;

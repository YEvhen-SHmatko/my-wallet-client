import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import moment from 'moment';
import 'moment-timezone';
import { isMobile, isTablet } from '../../services/mediaQuery';
import Styles from './index.module.css';

const MyDate = ({ date }) => {
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
      {moment(date).format('DD.MM.YYYY')}
    </div>
  );
};

MyDate.propTypes = {
  date: PropTypes.string.isRequired,
};
export default MyDate;

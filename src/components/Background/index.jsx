import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Styles from './index.module.css';
import { isMobile, isTablet } from '../../services/mediaQuery';

const Background = () => {
  const IsMobile = isMobile(useMediaQuery);
  const IsTablet = isTablet(useMediaQuery);
  return (
    <section
      className={
        IsMobile
          ? Styles.Mobile_section
          : IsTablet
          ? Styles.Tablet_section
          : Styles.Desktop_section
      }
    />
  );
};
export default Background;

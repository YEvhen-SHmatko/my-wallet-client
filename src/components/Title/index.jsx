import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet, isDefault } from '../../services/mediaQuery';
import Styles from './Title.module.css';

const Title = () => {
  const IsMobile = isMobile(useMediaQuery);
  const IsTablet = isTablet(useMediaQuery);
  const IsDefault = isDefault(useMediaQuery);
  return (
    <div className={IsDefault ? Styles.Default_section : Styles.Mobile_section}>
      <h1
        className={
          IsMobile
            ? Styles.Mobile_title
            : IsTablet
            ? Styles.Tablet_title
            : Styles.Desktop_title
        }
      >
        Kapu<span className={Styles.s}>s</span>ta
      </h1>
      <p
        className={
          IsMobile
            ? Styles.Mobile_subtitle
            : IsTablet
            ? Styles.Tablet_subtitle
            : Styles.Desktop_subtitle
        }
      >
        smart finance
      </p>
    </div>
  );
};

export default Title;

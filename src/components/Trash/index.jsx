import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet, isDefault } from '../../services/mediaQuery';
import Styles from './index.module.css';

const index = ({ id, icon }) => {
  const IsMobile = isMobile(useMediaQuery);
  const IsTablet = isTablet(useMediaQuery);
  const IsDefault = isDefault(useMediaQuery);
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
      {icon && (
        <button
          type="button"
          className={IsDefault ? Styles.Default_trash : Styles.Mobile_trash}
          id={id}
        />
      )}
    </div>
  );
};
index.defaultProps = {
  icon: true,
};
index.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  icon: PropTypes.bool,
};
export default index;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import * as income from '../../redux/operations/income';
import { isMobile, isTablet, isDefault } from '../../services/mediaQuery';
import Styles from './index.module.css';

const index = ({ id, icon, deleteIncome }) => {
  const IsMobile = isMobile(useMediaQuery);
  const IsTablet = isTablet(useMediaQuery);
  const IsDefault = isDefault(useMediaQuery);
  const handleClick = e => {
    deleteIncome(e.target.id);
  };
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
          onClick={handleClick}
        />
      )}
    </div>
  );
};
index.defaultProps = {
  icon: true,
};
index.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  deleteIncome: PropTypes.func.isRequired,
};
export default connect(null, { deleteIncome: income.deleteIncome })(index);

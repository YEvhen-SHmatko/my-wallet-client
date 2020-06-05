import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import * as income from '../../redux/operations/income';
import * as cost from '../../redux/operations/cost';
import { isMobile, isTablet, isDefault } from '../../services/mediaQuery';
import Styles from './index.module.css';

const index = ({ id, icon, deleteIncome, deleteCost, isExpenses }) => {
  const IsMobile = isMobile(useMediaQuery);
  const IsTablet = isTablet(useMediaQuery);
  const IsDefault = isDefault(useMediaQuery);
  const handleClick = e => {
    if (isExpenses) {
      deleteCost(e.target.id);
      return;
    }
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
index.defaultProps = { isExpenses: false, icon: true };
index.propTypes = {
  isExpenses: PropTypes.bool,
  id: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  deleteIncome: PropTypes.func.isRequired,
  deleteCost: PropTypes.func.isRequired,
};
export default connect(null, {
  deleteIncome: income.deleteIncome,
  deleteCost: cost.deleteCost,
})(index);

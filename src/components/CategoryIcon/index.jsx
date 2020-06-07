import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import currentCategory from '../../redux/operations/currentCategory';
import * as selectors from '../../redux/selectors';
import Styles from './index.module.css';

const CategoryIcon = ({
  title,
  src,
  cost,
  category,
  storeCategory,
  setCurrentCategory,
}) => {
  const handleClick = e => {
    setCurrentCategory(category);
  };
  const check = category === storeCategory;
  return (
    <button type="button" className={Styles.section} onClick={handleClick}>
      <div className={Styles.cost}>{cost}</div>
      <img className={Styles.img} src={src} alt="" />
      <div className={Styles.title}>{title}</div>
      <div className={check ? Styles.box_active : Styles.box} />
    </button>
  );
};
CategoryIcon.propTypes = {
  title: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  storeCategory: PropTypes.string.isRequired,
  setCurrentCategory: PropTypes.func.isRequired,
};
const MSTP = store => ({
  storeCategory: selectors.getCurrentCategory(store),
});
export default connect(MSTP, { setCurrentCategory: currentCategory })(
  CategoryIcon,
);

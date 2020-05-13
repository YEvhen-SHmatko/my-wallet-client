import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const index = ({ category }) => (
  <div className={Styles.category}>{category}</div>
);

index.propTypes = {
  category: PropTypes.string.isRequired,
};
export default index;

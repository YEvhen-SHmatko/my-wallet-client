import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const index = ({ cost }) => <div className={Styles.cost}>{cost}</div>;

index.propTypes = {
  cost: PropTypes.string.isRequired,
};
export default index;

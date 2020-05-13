import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const index = ({ name }) => <div className={Styles.name}>{name}</div>;

index.propTypes = {
  name: PropTypes.string.isRequired,
};
export default index;

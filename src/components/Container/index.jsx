import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const index = ({ children }) => {
  return <div className={Styles.container}>{children}</div>;
};

index.propTypes = {
  children: PropTypes.node.isRequired,
};
export default index;

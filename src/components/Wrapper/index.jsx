import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const index = ({ children, newStyles }) => {
  return <div className={[Styles.form, newStyles].join(' ')}>{children}</div>;
};

index.propTypes = {
  children: PropTypes.node.isRequired,
  newStyles: PropTypes.string.isRequired,
};
export default index;

import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const index = ({ children, newStyles }) => {
  return <div className={[Styles.form, newStyles].join(' ')}>{children}</div>;
};
index.defaultProps = {
  newStyles: '',
};
index.propTypes = {
  children: PropTypes.node.isRequired,
  newStyles: PropTypes.string,
};
export default index;

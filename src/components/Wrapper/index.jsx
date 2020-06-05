import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const index = ({ children, className }) => {
  return <div className={[Styles.form, className].join(' ')}>{children}</div>;
};
index.defaultProps = {
  className: '',
};
index.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default index;

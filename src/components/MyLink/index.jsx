import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const index = ({ newStyles, children, to }) => (
  <Link to={to} className={newStyles}>
    {children}
  </Link>
);
index.defaultProps = {
  children: '',
  newStyles: '',
  to: '/',
};
index.propTypes = {
  children: PropTypes.node,
  newStyles: PropTypes.string,
  to: PropTypes.string,
};
export default index;

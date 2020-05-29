import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MyLink = ({ newStyles, children, to }) => (
  <Link to={to} className={newStyles}>
    {children}
  </Link>
);
MyLink.defaultProps = {
  children: '',
  newStyles: '',
  to: '/',
};
MyLink.propTypes = {
  children: PropTypes.node,
  newStyles: PropTypes.string,
  to: PropTypes.string,
};
export default MyLink;

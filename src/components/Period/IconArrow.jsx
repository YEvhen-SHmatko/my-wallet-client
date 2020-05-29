import React from 'react';
import PropTypes from 'prop-types';

const IconArrow = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M10 17l5-5-5-5v10z" />
    <path fill="none" d="M0 24V0h24v24H0z" />
  </svg>
);
IconArrow.defaultProps = {
  className: '',
};
IconArrow.propTypes = {
  className: PropTypes.string,
};
export default IconArrow;

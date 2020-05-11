import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const First = ({ newStyles }) => {
  return <div className={[Styles.first, newStyles].join(' ')} />;
};
First.propTypes = {
  newStyles: PropTypes.string.isRequired,
};
export default First;

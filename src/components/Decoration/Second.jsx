import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const Second = ({ newStyles }) => {
  return <div className={[Styles.second, newStyles].join(' ')} />;
};
Second.propTypes = {
  newStyles: PropTypes.string.isRequired,
};
export default Second;

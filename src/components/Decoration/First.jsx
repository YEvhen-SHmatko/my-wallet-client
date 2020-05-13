import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const index = ({ newStyles }) => {
  return <div className={[Styles.first, newStyles].join(' ')} />;
};

index.defaultProps = {
  newStyles: '',
};
index.propTypes = {
  newStyles: PropTypes.string,
};
export default index;

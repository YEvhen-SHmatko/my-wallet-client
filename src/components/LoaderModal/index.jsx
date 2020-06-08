import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const LoaderModal = ({ Component }) => (
  <div className={Styles.section}>
    <Component />
  </div>
);

LoaderModal.propTypes = {
  Component: PropTypes.func.isRequired,
};
export default LoaderModal;

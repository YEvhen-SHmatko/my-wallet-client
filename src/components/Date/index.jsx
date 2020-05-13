import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const index = ({ date }) => <div className={Styles.date}>{date}</div>;

index.propTypes = {
  date: PropTypes.string.isRequired,
};
export default index;

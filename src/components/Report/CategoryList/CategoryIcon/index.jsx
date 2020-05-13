import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const index = ({ title, src, cost }) => (
  <div className={Styles.section}>
    <div className={Styles.cost}>{cost}</div>
    <img className={Styles.img} src={src} alt="" />
    <div className={Styles.title}>{title}</div>
    <div className={Styles.box} />
  </div>
);
const Default = () => <div>I</div>;
index.defaultProps = {
  title: 'title',
  cost: 'cost',
};
index.propTypes = {
  title: PropTypes.string,
  cost: PropTypes.string,
  src: PropTypes.string.isRequired,
};
export default index;

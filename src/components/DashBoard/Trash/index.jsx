import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const index = ({ id, icon }) => (
  <div className={Styles.section}>
    {icon && <button type="button" className={Styles.trash} id={id} />}
  </div>
);
index.defaultProps = {
  icon: true,
};
index.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  icon: PropTypes.bool,
};
export default index;

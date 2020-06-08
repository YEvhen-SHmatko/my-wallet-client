import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as selectors from '../../redux/selectors';
import Styles from './index.module.css';

const InfoUser = ({ fullName, email }) => {
  return (
    <div className={Styles.content}>
      <div>Пользователь: {fullName}</div>
      <div>Електронная почта: {email}</div>
    </div>
  );
};
InfoUser.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
const MSTP = store => ({
  fullName: selectors.getFullName(store),
  email: selectors.getEmail(store),
});
export default connect(MSTP)(InfoUser);

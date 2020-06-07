import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Styles from './index.module.css';
import Logo from '../Logo';
import * as operations from '../../redux/operations/auth';
import * as selectors from '../../redux/selectors';

const Header = ({ logout, isLogin }) => {
  return (
    <header className={Styles.header}>
      <Logo />
      {isLogin && (
        <button type="button" onClick={logout}>
          exit
        </button>
      )}
    </header>
  );
};
Header.propTypes = {
  logout: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
};
const MSTP = store => ({
  isLogin: selectors.getIsLogin(store),
});
export default connect(MSTP, { logout: operations.authLogout })(Header);

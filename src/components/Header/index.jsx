import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Styles from './index.module.css';
import Logo from '../Logo';
import * as operations from '../../redux/operations/auth';

const Header = ({ logout }) => {
  return (
    <header className={Styles.header}>
      <Logo />
      <button type="button" onClick={logout}>
        exit
      </button>
    </header>
  );
};
Header.propTypes = {
  logout: PropTypes.func.isRequired,
};
export default connect(null, { logout: operations.authLogout })(Header);

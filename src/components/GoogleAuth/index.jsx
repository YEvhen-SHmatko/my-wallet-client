import React from 'react';
import Styles from './index.module.css';
import * as API from '../../services/API';

const GoogleAuth = () => {
  return (
    <a className={Styles.link} href={`${API.GetAuthByGoogle}`}>
      <span className={Styles.icon} />
      Google
    </a>
  );
};

export default GoogleAuth;

import React, { Component } from 'react';
import Styles from './index.module.css';

import GoogleAuth from '../GoogleAuth';
import AuthInput from '../AuthInput';
import NavAuth from '../NavAuth';

export default class index extends Component {
  state = {};

  render() {
    return (
      <div className={Styles.form}>
        <p className={Styles.firstText}>
          Вы можете авторизироваться с помощью google account:
        </p>
        <GoogleAuth />

        <p className={Styles.secondText}>
          Или зайти в приложение с помощью имейла и пароля, сперва
          зарегистрировавшись:
        </p>
        <AuthInput />
        <NavAuth />
      </div>
    );
  }
}

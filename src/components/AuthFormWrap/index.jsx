import React, { Component } from 'react';
import { useMediaQuery } from 'react-responsive';
import Styles from './index.module.css';
import Wrapper from '../Wrapper';
import GoogleAuth from '../GoogleAuth';
import AuthInput from '../AuthInput';
import NavAuth from '../NavAuth';
import { isNotMobile } from '../../services/mediaQuery';

export default class index extends Component {
  state = {};

  render() {
    const Default = isNotMobile(useMediaQuery);
    return (
      <Wrapper newStyles={Default ? Styles.Default_form : Styles.form}>
        <p className={Default ? Styles.Default_firstText : Styles.firstText}>
          Вы можете авторизироваться с помощью google account:
        </p>
        <GoogleAuth />
        <p className={Default ? Styles.Default_secondText : Styles.secondText}>
          Или зайти в приложение с помощью имейла и пароля, сперва
          зарегистрировавшись:
        </p>
        <AuthInput />
        <NavAuth />
      </Wrapper>
    );
  }
}

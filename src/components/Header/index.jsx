import React, { Component } from 'react';
import Styles from './index.module.css';
import Logo from '../Logo';

export default class index extends Component {
  state = {};

  render() {
    return (
      <header className={Styles.header}>
        <Logo />
      </header>
    );
  }
}

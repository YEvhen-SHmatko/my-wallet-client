import React from 'react';
import Styles from './index.module.css';
import Logo from '../Logo';
import AuthFormWrap from '../AuthFormWrap';
import Background from '../Background';
import Title from '../Title';
import Decoration from '../Decoration';

export default function LoginRegister() {
  return (
    <>
      <header className={Styles.header}>
        <Logo />
      </header>
      <main className={Styles.main}>
        <Decoration />
        <Background />
        <div className={Styles.section}>
          <div className={Styles.first}>
            <Title />
          </div>
          <div className={Styles.second}>
            <AuthFormWrap />
          </div>
        </div>
      </main>
    </>
  );
}

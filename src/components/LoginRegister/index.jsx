import React from 'react';
import Styles from './index.module.css';
import Header from '../Header';
import AuthFormWrap from '../AuthFormWrap';
import Background from '../Background';
import Title from '../Title';
import Decoration from '../Decoration';

export default function LoginRegister() {
  return (
    <>
      <Header />
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

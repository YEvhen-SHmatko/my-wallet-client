import React from 'react';
import Styles from './index.module.css';
import Logo from './Logo';
// import AuthFormWrap from './AuthFormWrap';
import Background from './Background';
// import OtherIcon from './OtherIcon';
import Title from './Title';

export default function LoginRegister() {
  return (
    <>
      <header className={Styles.header}>
        <Logo />
      </header>
      <main className={Styles.main}>
        <Background />
        <div className={Styles.section}>
          <div className={Styles.first}>
            <Title />
          </div>
          <div className={Styles.second}>
            <div className={Styles.form}>form</div>
          </div>
        </div>
      </main>
    </>
  );
}

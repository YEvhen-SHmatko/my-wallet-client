import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';
import Styles from './index.module.css';
import Header from '../Header';
import AuthFormWrap from '../AuthFormWrap';
import Background from '../Background';
import Title from '../Title';
import Decoration from '../Decoration';

const LoginRegister = () => {
  const IsMobile = isMobile(useMediaQuery);
  const IsTablet = isTablet(useMediaQuery);
  return (
    <>
      <Header />
      <main className={Styles.main}>
        <Decoration />
        <Background />
        <div
          className={
            IsMobile
              ? Styles.Mobile_section
              : IsTablet
              ? Styles.Tablet_section
              : Styles.Desktop_section
          }
        >
          <div
            className={
              IsMobile
                ? Styles.Mobile_first
                : IsTablet
                ? Styles.Tablet_first
                : Styles.Desktop_first
            }
          >
            <Title />
          </div>
          <div
            className={
              IsMobile
                ? Styles.Mobile_second
                : IsTablet
                ? Styles.Tablet_second
                : Styles.Desktop_second
            }
          >
            <AuthFormWrap />
          </div>
        </div>
      </main>
    </>
  );
};
export default LoginRegister;

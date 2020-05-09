import React from 'react';
import Styles from './Logo.module.css';

export default function Loader() {
  return (
    <>
      <img
        className={Styles.logo}
        src="./images/svg/logo-kapusta.svg"
        alt="logo"
        width="100%"
      />
    </>
  );
}

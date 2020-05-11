import React from 'react';
import Styles from './index.module.css';

export default function ButtonGoogle() {
  return (
    <button type="button" className={Styles.button}>
      <img
        className={Styles.icon}
        src="./images/google_PNG19635.png"
        alt="google icon"
      />
      Google
    </button>
  );
}

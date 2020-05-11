import React from 'react';
import Styles from './Title.module.css';

const Title = () => (
  <div className={Styles.section}>
    <h1 className={Styles.title}>
      Kapu<span className={Styles.s}>s</span>ta
    </h1>
    <p className={Styles.subtitle}>smart finance</p>
  </div>
);

export default Title;

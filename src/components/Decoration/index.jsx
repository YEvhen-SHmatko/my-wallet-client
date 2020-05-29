import React from 'react';
import Styles from './index.module.css';
import { Desktop, Tablet, Mobile } from '../../services/mediaQuery';
import First from './First';
import Second from './Second';

export default function index() {
  return (
    <>
      <Mobile>
        <First newStyles={Styles.decorMobile} />
      </Mobile>
      <Tablet>
        <First newStyles={Styles.decorTablet_first} />
        <First newStyles={Styles.decorTablet_second} />
      </Tablet>
      <Desktop>
        <First newStyles={Styles.decorDesktop_first} />
        <Second newStyles={Styles.decorDesktop_second} />
      </Desktop>
    </>
  );
}

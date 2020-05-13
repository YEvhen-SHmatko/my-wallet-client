import React from 'react';
import Balance from '../Balance';
import Report from '../Report';
import Calendar from '../Calendar';
import NavDashBoard from '../NavDashBoard';
import { Mobile, Default } from '../../services/media-query';
import Styles from './index.module.css';
// import Loader from '../Loader';

export default function index() {
  return (
    <>
      <Mobile>
        <div className={Styles.mainHeader}>
          <div className={Styles.center}>
            <Report />
          </div>
          <div className={Styles.center}>
            <Balance value={1} />
          </div>
          <div className={Styles.center}>
            <Calendar data="17.05.1991" />
          </div>
        </div>
      </Mobile>
      <Default>
        <div className={Styles.mainHeader}>
          <div className={Styles.start}>
            <NavDashBoard />
          </div>
          <div className={Styles.center}>
            <Balance value={1} />
          </div>
          <div className={Styles.end}>
            <Report />
          </div>
        </div>
      </Default>
    </>
  );
}

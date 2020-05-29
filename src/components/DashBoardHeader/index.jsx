import React from 'react';
import Balance from '../Balance';
import ReportLink from '../ReportLink';
import Calendar from '../Calendar';
import NavDashBoard from '../NavDashBoard';
import { Mobile, Default } from '../../services/mediaQuery';
import Styles from './index.module.css';

const DashBoardHeader = () => {
  return (
    <>
      <Mobile>
        <div className={Styles.mainHeader}>
          <div className={Styles.center}>
            <ReportLink />
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
        <div className={Styles.Default_mainHeader}>
          <div className={Styles.Default_start}>
            <NavDashBoard />
          </div>
          <div className={Styles.Default_center}>
            <Balance value={1} />
          </div>
          <div className={Styles.Default_end}>
            <ReportLink />
          </div>
        </div>
      </Default>
    </>
  );
};
export default DashBoardHeader;

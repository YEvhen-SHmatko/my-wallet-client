import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors';
import Balance from '../Balance';
import BalanceReport from '../BalanceReport';
import ReportLink from '../ReportLink';
import Calendar from '../Calendar';
import NavDashBoard from '../NavDashBoard';
import { Mobile, Default } from '../../services/mediaQuery';
import Styles from './index.module.css';

const DashBoardHeader = ({ balance }) => {
  const disable = !balance;
  return (
    <>
      <Mobile>
        <div className={Styles.mainHeader}>
          <div className={disable ? Styles.center_disabled : Styles.center}>
            <ReportLink />
          </div>
          <div className={Styles.center}>
            {disable ? <Balance /> : <BalanceReport />}
          </div>
          <div className={disable ? Styles.center_disabled : Styles.center}>
            <Calendar />
          </div>
        </div>
      </Mobile>
      <Default>
        <div className={Styles.Default_mainHeader}>
          {!disable && (
            <div
              className={
                disable ? Styles.Default_start_disabled : Styles.Default_start
              }
            >
              <NavDashBoard />
            </div>
          )}
          <div className={Styles.Default_center}>
            {disable ? <Balance /> : <BalanceReport />}
          </div>
          <div
            className={
              disable ? Styles.Default_end_disabled : Styles.Default_end
            }
          >
            <ReportLink />
          </div>
        </div>
      </Default>
    </>
  );
};
DashBoardHeader.propTypes = {
  balance: PropTypes.number.isRequired,
};
const MSTP = store => ({
  balance: selectors.getBalance(store),
});
export default connect(MSTP)(DashBoardHeader);

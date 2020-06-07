import React from 'react';
import { useMediaQuery } from 'react-responsive';
import * as MQ from '../../services/mediaQuery';
import Calendar from '../Calendar';
import MoneyForm from '../MoneyForm';
import Table from '../Table';
import MonthStatistic from '../MonthStatistic';
import Styles from './index.module.css';
import Modal from '../Modal';

const ExpensesSection = () => {
  const IsMobile = MQ.isMobile(useMediaQuery);
  const IsTablet = MQ.isTablet(useMediaQuery);
  return (
    <>
      <MQ.Mobile>
        <Modal />
      </MQ.Mobile>
      <MQ.Default>
        <div className={Styles.section}>
          <div
            className={
              IsMobile
                ? Styles.Mobile_row
                : IsTablet
                ? Styles.Tablet_row
                : Styles.Desktop_row
            }
          >
            <Calendar />
            <MoneyForm />
          </div>
          <div className={Styles.main}>
            <Table />
            <MonthStatistic />
          </div>
        </div>
      </MQ.Default>
    </>
  );
};
export default ExpensesSection;

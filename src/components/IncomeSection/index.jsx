import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet, Default, Mobile } from '../../services/mediaQuery';
import Calendar from '../Calendar';
import MoneyForm from '../MoneyForm';
import Table from '../Table';
import MonthStatistic from '../MonthStatistic';
import Styles from './index.module.css';
import Modal from '../Modal';

const IncomeSection = () => {
  const IsMobile = isMobile(useMediaQuery);
  const IsTablet = isTablet(useMediaQuery);
  return (
    <>
      <Mobile>
        <Modal />
      </Mobile>
      <Default>
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
      </Default>
    </>
  );
};
export default IncomeSection;

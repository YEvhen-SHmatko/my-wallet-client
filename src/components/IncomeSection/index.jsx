import React, { Component } from 'react';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet, Default } from '../../services/mediaQuery';
import Calendar from '../Calendar';
import MoneyForm from '../MoneyForm';
import Table from '../Table';
import MonthStatistic from '../MonthStatistic';
import Styles from './index.module.css';

const data = [
  {
    id: 1,
    month: 'январь',
    cost: '$532.90',
  },
  {
    id: 2,
    month: 'февраль',
    cost: '$398.16',
  },
  {
    id: 3,
    month: 'март',
    cost: '$323.94',
  },
  {
    id: 4,
    month: 'апрель',
    cost: '$717.73',
  },
  {
    id: 5,
    month: 'май',
    cost: '$254.42',
  },
  {
    id: 6,
    month: 'июнь',
    cost: '$258.92',
  },
  {
    id: 7,
    month: 'июль',
    cost: '$195.94',
  },
  {
    id: 8,
    month: 'август',
    cost: '$144.88',
  },
  {
    id: 9,
    month: 'сентябрь',
    cost: '$677.34',
  },
  {
    id: 10,
    month: 'октябрь',
    cost: '$148.12',
  },
];
const IncomeSection = () => {
  const IsMobile = isMobile(useMediaQuery);
  const IsTablet = isTablet(useMediaQuery);
  return (
    <div className={Styles.section}>
      <Default>
        <div
          className={
            IsMobile
              ? Styles.Mobile_row
              : IsTablet
              ? Styles.Tablet_row
              : Styles.Desktop_row
          }
        >
          <MoneyForm />
        </div>
        <div className={Styles.main}>
          <Table />
          <MonthStatistic data={data} />
        </div>
      </Default>
    </div>
  );
};
export default IncomeSection;

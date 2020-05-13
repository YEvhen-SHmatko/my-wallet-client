import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import routes from '../../routes';
import { Mobile, Default } from '../../services/media-query';
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
export default class index extends Component {
  state = {};

  render() {
    return (
      <div className={Styles.section}>
        <Mobile>
          <Redirect to={routes.DashBoardPage.path} />
        </Mobile>
        <Default>
          <div className={Styles.row}>
            <Calendar />
            <MoneyForm />
          </div>
          <div className={Styles.main}>
            <Table />
            <MonthStatistic data={data} />
          </div>
        </Default>
      </div>
    );
  }
}

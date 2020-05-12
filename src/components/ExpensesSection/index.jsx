import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import routes from '../../routes';
import { Mobile, Default } from '../../services/media-query';
import Calendar from '../DashBoard/Calendar';
import MoneyForm from '../DashBoard/MoneyForm';
import Table from '../DashBoard/Table';
import Styles from './index.module.css';

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
          <Table />
        </Default>
      </div>
    );
  }
}

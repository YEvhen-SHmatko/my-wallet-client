import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Mobile, Default } from '../../services/media-query';
import routes from '../../routes';
import Styles from './index.module.css';
import Header from '../Header';
import Background from '../Background';
import Container from '../Container';
import DecorationFirst from '../Decoration/First';
import CategoryList from '../CategoryList';
import MoneyList from '../MoneyList';
import Period from '../Period';
import BalanceReport from '../BalanceReport';
import GoBack from '../GoBack';
import MyChart from '../MyChart';

export default class index extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <main className={Styles.main}>
          <Background />
          <Container>
            <div className={Styles.container}>
              <div className={Styles.head}>
                <GoBack to={routes.DashBoardPage.path} />
                <Mobile>
                  <div className={Styles.Period}>
                    <Period />
                  </div>
                  <BalanceReport date="13.05.2020" value={55000} />
                </Mobile>
                <Default>
                  <BalanceReport date="13.05.2020" value={55000} />
                  <Period />
                </Default>
              </div>
              <div className={Styles.info}>
                <MoneyList />
              </div>
              <div className={Styles.info}>
                <CategoryList />
              </div>
              <div className={Styles.info}>
                <MyChart
                  data={[
                    { name: 'chery', cost: '2500' },
                    { name: 'bacon', cost: '4500' },
                    { name: 'tomato', cost: '500' },
                    { name: 'chery', cost: '5500' },
                    { name: 'bacon', cost: '4100' },
                    { name: 'tomato', cost: '300' },
                    { name: 'chery', cost: '2000' },
                    { name: 'bacon', cost: '1500' },
                    { name: 'tomato', cost: '500' },
                    { name: 'tomato', cost: '200' },
                    // { name: 'tomato', cost: '200' },//11
                  ]}
                />
              </div>
            </div>
          </Container>
        </main>
        <footer className={Styles.footer}>
          <DecorationFirst />
        </footer>
      </>
    );
  }
}

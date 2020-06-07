import React from 'react';
import { useMediaQuery } from 'react-responsive';
import * as MQ from '../../services/mediaQuery';
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

const Report = () => {
  const IsMobile = MQ.isMobile(useMediaQuery);
  const IsTablet = MQ.isTablet(useMediaQuery);
  const IsDefault = MQ.isDefault(useMediaQuery);
  return (
    <>
      <Header />
      <main className={Styles.main}>
        <Background />
        <Container>
          <div
            className={
              IsMobile
                ? Styles.Mobile_container
                : IsTablet
                ? Styles.Tablet_container
                : Styles.Desktop_container
            }
          >
            <div
              className={IsDefault ? Styles.Default_head : Styles.Mobile_head}
            >
              <GoBack />
              <MQ.Mobile>
                <div className={Styles.Period}>
                  <Period />
                </div>
                <BalanceReport />
              </MQ.Mobile>
              <MQ.Default>
                <BalanceReport />
                <Period />
              </MQ.Default>
            </div>
            <div
              className={IsDefault ? Styles.Default_info : Styles.Mobile_info}
            >
              <MoneyList />
            </div>
            <div
              className={IsDefault ? Styles.Default_info : Styles.Mobile_info}
            >
              <CategoryList />
            </div>
            <MyChart />
          </div>
        </Container>
      </main>
      <footer className={Styles.footer}>
        <DecorationFirst />
      </footer>
    </>
  );
};
export default Report;

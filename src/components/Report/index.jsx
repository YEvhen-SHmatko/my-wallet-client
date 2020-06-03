import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Mobile,
  Default,
  isMobile,
  isTablet,
  isDefault,
} from '../../services/mediaQuery';
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

const Report = () => {
  const IsMobile = isMobile(useMediaQuery);
  const IsTablet = isTablet(useMediaQuery);
  const IsDefault = isDefault(useMediaQuery);
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
              <GoBack to={routes.DashBoardPage.path} />
              <Mobile>
                <div className={Styles.Period}>
                  <Period />
                </div>
                <BalanceReport />
              </Mobile>
              <Default>
                <BalanceReport />
                <Period />
              </Default>
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
            <div
              className={IsDefault ? Styles.Default_info : Styles.Mobile_info}
            >
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
};
export default Report;

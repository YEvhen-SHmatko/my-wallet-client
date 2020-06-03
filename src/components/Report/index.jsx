import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
import * as selectors from '../../redux/selectors';

const Report = ({ categories }) => {
  const IsMobile = isMobile(useMediaQuery);
  const IsTablet = isTablet(useMediaQuery);
  const IsDefault = isDefault(useMediaQuery);

  let data = null;
  if (categories && categories.length > 0) {
    data = categories[0].allCosts;
  }
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
            {data && (
              <div
                className={IsDefault ? Styles.Default_info : Styles.Mobile_info}
              >
                <MyChart data={data} />
              </div>
            )}
          </div>
        </Container>
      </main>
      <footer className={Styles.footer}>
        <DecorationFirst />
      </footer>
    </>
  );
};
Report.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.any).isRequired,
};
const MSTP = store => ({
  categories: selectors.getCostByPeriodAndCategories(store),
});
export default connect(MSTP, null)(Report);

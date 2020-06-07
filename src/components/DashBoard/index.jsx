import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as MQ from '../../services/mediaQuery';
import * as selectors from '../../redux/selectors';
import routes from '../../routes';
import Styles from './index.module.css';
import Header from '../Header';
import Background from '../Background';
import Container from '../Container/index';
import Wrapper from '../Wrapper';
import DecorationFirst from '../Decoration/First';
import DashBoardHeader from '../DashBoardHeader';
import TableMobile from '../TableMobile';
import Loader from '../Loader';

const DashBoard = ({ balance }) => {
  const disable = !balance;
  return (
    <>
      <Header />
      <main className={Styles.main}>
        <Background />
        <Container>
          <DashBoardHeader />
          <MQ.Mobile>{!disable && <TableMobile />}</MQ.Mobile>
          <MQ.Default>
            {!disable && (
              <Wrapper
                className={disable ? Styles.mainBody_disabled : Styles.mainBody}
              >
                <Suspense fallback={<Loader />}>
                  <Switch>
                    <Route
                      path={routes.Expenses.path}
                      exact
                      component={routes.Expenses.component}
                    />
                    <Route
                      path={routes.Income.path}
                      exact
                      component={routes.Income.component}
                    />
                  </Switch>
                </Suspense>
              </Wrapper>
            )}
          </MQ.Default>
        </Container>
      </main>
      <footer className={Styles.footer}>
        <DecorationFirst />
      </footer>
    </>
  );
};
DashBoard.propTypes = {
  balance: PropTypes.number.isRequired,
};
const MSTP = store => ({
  balance: selectors.getBalance(store),
});
export default connect(MSTP)(DashBoard);

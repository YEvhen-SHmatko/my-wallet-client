import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Mobile, Default } from '../../services/mediaQuery';
import routes from '../../routes';
import Styles from './index.module.css';
import Header from '../Header';
import Background from '../Background';
import Container from '../Container';
import Wrapper from '../Wrapper';
import DecorationFirst from '../Decoration/First';
import DashBoardHeader from '../DashBoardHeader';
import TableMobile from '../TableMobile';

const DashBoard = () => {
  return (
    <>
      <Header />
      <main className={Styles.main}>
        <Background />
        <Container>
          <DashBoardHeader />
          <Mobile>
            <Redirect to={routes.DashBoardPage.path} />
            <TableMobile />
          </Mobile>
          <Default>
            <Redirect to={routes.Expenses.path} />
            <Wrapper newStyles={Styles.mainBody}>
              <Suspense fallback="Loader">
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
          </Default>
        </Container>
      </main>
      <footer className={Styles.footer}>
        <DecorationFirst />
      </footer>
    </>
  );
};
export default DashBoard;

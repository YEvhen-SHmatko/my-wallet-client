import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import Styles from './index.module.css';
import Header from '../Header';
import Background from '../Background';
import Container from '../Container';
import Wrapper from '../Wrapper';
import Decoration from '../Decoration/First';
import NavDashBoard from './NavDashBoard';
import Balance from './Balance';
// import Loader from '../Loader';
export default class index extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <main className={Styles.main}>
          <Background />
          <Container>
            <div>
              <div className={Styles.mainHeader}>
                <div className={Styles.start}>
                  <NavDashBoard />
                </div>
                <div className={Styles.center}>
                  <Balance value={1} />
                </div>
                <div className={Styles.end}>end</div>
              </div>
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
            </div>
          </Container>
        </main>
        <footer>
          <Decoration newStyles={Styles.footer} />
        </footer>
      </>
    );
  }
}

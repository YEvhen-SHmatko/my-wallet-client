import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../routes';
// import Loader from '../Loader';

const App = ({ isLogin }) => {
  console.log(isLogin);
  return (
    <Suspense fallback="Loader">
      <Route path={routes.Home.path}>
        {isLogin ? (
          <Redirect to={routes.DashBoardPage.path} />
        ) : (
          <Redirect to={routes.AUTH_PAGE.path} />
        )}
        <Switch>
          <Route
            path={routes.AUTH_PAGE.path}
            component={routes.AUTH_PAGE.component}
          />
          <Route
            path={routes.ReportPage.path}
            component={routes.ReportPage.component}
          />
          <Route
            path={routes.DashBoardPage.path}
            component={routes.DashBoardPage.component}
          />
        </Switch>
      </Route>
    </Suspense>
  );
};
const MSTP = store => ({
  isLogin: store.public.isLogin,
});
export default connect(MSTP, null)(App);

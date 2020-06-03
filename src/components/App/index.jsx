import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import operations from '../../redux/operations/init';
import routes from '../../routes';

const App = ({ isLogin, initKapusta }) => {
  return (
    <Suspense fallback="Loader">
      <Route path={routes.Home.path}>
        {isLogin ? (
          <>
            {initKapusta()}
            <Redirect to={routes.DashBoardPage.path} />
            {/* <Redirect to={routes.ReportPage.path} /> */}
          </>
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
App.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  initKapusta: PropTypes.func.isRequired,
};
const MSTP = store => ({
  isLogin: store.public.isLogin,
});
export default connect(MSTP, { initKapusta: operations })(App);

import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../routes';
// import Loader from '../Loader';

function App() {
  return (
    <Switch>
      <Suspense fallback="Loader">
        <Route exact path={routes.Home.path}>
          <Redirect to={routes.DashBoardPage.path} />
        </Route>
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
      </Suspense>
    </Switch>
  );
}

export default App;

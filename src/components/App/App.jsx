import React, { Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import * as MQ from '../../services/mediaQuery';
import routes from '../../routes';
import Loader from '../Loader';
import LoaderModal from '../LoaderModal';
import { getLS } from '../../services/localStorage';

const App = ({
  isModal,
  isLogin,
  session,
  init,
  getTransactions,
  getProduct,
  getCategory,
}) => {
  const history = useHistory();
  const IsMobile = MQ.isMobile(useMediaQuery);

  useEffect(() => {
    if (!isLogin) {
      history.replace(routes.AUTH_LOGIN.path);
    }
  }, [isLogin, history]);

  useEffect(() => {
    if (isLogin && session && !init) {
      axios.defaults.headers.common.Authorization = `Bearer ${session}`;
      getTransactions();
      getProduct();
      getCategory();
    }
    if (isLogin && session && init && IsMobile) {
      history.replace(routes.DashBoardPage.path);
    } else if (isLogin && session && init && !IsMobile) {
      history.replace(routes.Expenses.path);
    } else {
      history.replace(routes.AUTH_LOGIN.path);
    }
  }, [
    isLogin,
    session,
    init,
    IsMobile,
    getTransactions,
    getProduct,
    getCategory,
    history,
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <Route path={routes.Home.path}>
        {isModal.open && <LoaderModal Component={isModal.Component} />}
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
App.defaultProps = {
  session: '',
};
App.propTypes = {
  getTransactions: PropTypes.func.isRequired,
  getProduct: PropTypes.func.isRequired,
  getCategory: PropTypes.func.isRequired,
  isModal: PropTypes.shape({
    open: PropTypes.bool.isRequired,
    Component: PropTypes.func.isRequired,
  }).isRequired,
  isLogin: PropTypes.bool.isRequired,
  session: PropTypes.string,
  init: PropTypes.bool.isRequired,
};
export default App;

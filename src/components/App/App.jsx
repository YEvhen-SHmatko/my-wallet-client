import React, { Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
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
    if (init) {
      if (IsMobile) {
        history.replace(routes.DashBoardPage.path);
      } else {
        history.replace(routes.Expenses.path);
      }
    }
  }, [init, IsMobile, history]);

  useEffect(() => {
    if (isLogin) {
      getLS('persist:kapusta')
        .then(res => {
          const token = JSON.parse(JSON.parse(res).public).session || session;
          axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        })
        .then(() => {
          getTransactions();
          getProduct();
          getCategory();
        });
      return;
    }
    history.replace(routes.AUTH_LOGIN.path);
  }, [isLogin, getCategory, getProduct, getTransactions, history, session]);
  return (
    <Suspense fallback={<Loader />}>
      <Route path={routes.Home.path}>
        {isModal && <LoaderModal />}
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
  isModal: PropTypes.bool.isRequired,
  isLogin: PropTypes.bool.isRequired,
  session: PropTypes.string,
  init: PropTypes.bool.isRequired,
};
export default App;

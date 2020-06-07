import React, { Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
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
  init,
  getTransactions,
  getProduct,
  getCategory,
}) => {
  useEffect(() => {
    const getToken = () => {
      const session = `Bearer ${
        JSON.parse(getLS('persist:kapusta').public).session
      }`;
      return Promise.resolve(session);
    };
    getToken()
      .then(res => {
        axios.defaults.headers.common.Authorization = res;
      })
      .then(() => {
        getTransactions();
        getProduct();
        getCategory();
      });
  }, [getCategory, getProduct, getTransactions]);
  const IsMobile = MQ.isMobile(useMediaQuery);
  return (
    <Suspense fallback={<Loader />}>
      <Route path={routes.Home.path}>
        {isModal && <LoaderModal />}
        {isLogin ? (
          <>
            {init && (
              <Suspense fallback={<Loader />}>
                {IsMobile ? (
                  <Redirect to={routes.DashBoardPage.path} />
                ) : (
                  <Redirect to={routes.Expenses.path} />
                )}
              </Suspense>
            )}
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
  getTransactions: PropTypes.func.isRequired,
  getProduct: PropTypes.func.isRequired,
  getCategory: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired,
  isLogin: PropTypes.bool.isRequired,
  init: PropTypes.bool.isRequired,
};
export default App;

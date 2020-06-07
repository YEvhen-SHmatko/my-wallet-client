import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import Styles from './index.module.css';
import Loader from '../Loader';

const LoaderModal = ({ component }) => (
  <div className={Styles.section}>
    {component || (
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
    )}
  </div>
);

LoaderModal.propTypes = {
  component: PropTypes.node.isRequired,
};
export default LoaderModal;

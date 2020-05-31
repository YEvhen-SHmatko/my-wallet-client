import React from 'react';

const AUTH_PAGE = React.lazy(() =>
  import('../pages/AUTH_PAGE' /* webpackChunkName: "AUTH_PAGE" */),
);
const DashBoardPage = React.lazy(() =>
  import('../pages/DashBoardPage' /* webpackChunkName: "DashBoardPage" */),
);
const Expenses = React.lazy(() =>
  import('../components/ExpensesSection' /* webpackChunkName: "Expenses" */),
);
const Income = React.lazy(() =>
  import('../components/IncomeSection' /* webpackChunkName: "Income" */),
);
const ReportPage = React.lazy(() =>
  import('../pages/ReportPage' /* webpackChunkName: "ReportPage" */),
);
const repositori = '';
const routes = {
  AUTH_PAGE: {
    path: `${repositori}/auth`,
    component: AUTH_PAGE,
  },
  AUTH_LOGIN: {
    path: `${repositori}/auth/login`,
  },
  AUTH_REGISTER: {
    path: `${repositori}/auth/register`,
  },
  Home: {
    path: `${repositori}/`,
  },
  DashBoardPage: {
    path: `${repositori}/dashboard`,
    component: DashBoardPage,
  },
  Expenses: {
    path: `${repositori}/dashboard/expenses`,
    component: Expenses,
  },
  Income: {
    path: `${repositori}/dashboard/income`,
    component: Income,
  },
  ReportPage: {
    path: `${repositori}/report`,
    component: ReportPage,
  },
};
export default routes;

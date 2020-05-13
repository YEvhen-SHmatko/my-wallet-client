import React from 'react';

const LoginRegisterPage = React.lazy(() =>
  import(
    '../pages/LoginRegisterPage' /* webpackChunkName: "LoginRegisterPage" */
  ),
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
const repositori = '';
const routes = {
  LoginRegisterPage: {
    path: `${repositori}/auth`,
    component: LoginRegisterPage,
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
};
export default routes;

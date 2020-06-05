import { createSelector } from 'reselect';
import {
  getAmountByPeriod,
  CostByPeriodAndCategories,
} from '../../services/hendlers';
// -----// PUBLIC //-----//
export const getStatus = store => {
  return store.public.isLogin;
};
export const getFullName = store => {
  return store.public.isLogin;
};
export const getSession = store => {
  return store.public.isLogin;
};
export const getIsLogin = store => {
  return store.public.isLogin;
};

// -----// TRANSACTION //-----//
export const getBalance = store => {
  return store.transactions.balance;
};
export const getIncomes = store => {
  return store.transactions.income;
};
export const getCosts = store => {
  return store.transactions.costs;
};
export const getError = store => {
  return store.transactions.error;
};

// -----// Categories //-----//

export const getCategories = store => {
  return store.categories;
};
// -----// Products //-----//

export const getProducts = store => {
  return store.products;
};

// -----// Init //-----//
export const getInit = store => {
  return store.init;
};
// -----// Other logic //-----//
export const getPeriod = store => {
  return store.period;
};

export const getCostsStatistic = createSelector(
  [getPeriod, getCosts],
  (period, costs) => {
    return getAmountByPeriod({ data: costs, startPeriod: period, viewOld: 6 });
  },
);

export const getIncomesStatistic = createSelector(
  [getPeriod, getIncomes],
  (period, data) => {
    return getAmountByPeriod({
      data,
      startPeriod: period,
      viewOld: 6,
    });
  },
);
export const getMonthCosts = createSelector([getCostsStatistic], costs => {
  return costs[0].amount;
});
export const getMonthIncomes = createSelector(
  [getIncomesStatistic],
  incomes => {
    return incomes[0].amount;
  },
);
export const getCostByPeriodAndCategories = createSelector(
  [getPeriod, getCosts, getCategories],
  (period, costs, categories) =>
    CostByPeriodAndCategories(period, costs, categories),
);
// export const getFilterContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) =>
//     contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()),
//     ),
// );

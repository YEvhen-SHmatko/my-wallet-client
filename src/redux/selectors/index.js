import { createSelector } from 'reselect';
import { getAmountByPeriod } from '../../services/hendlers';
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

export const getMonthStatistics = createSelector(
  [getPeriod, getCosts],
  (period, costs) => {
    return getAmountByPeriod({ data: costs, startPeriod: period, viewOld: 6 });
  },
);
// export const getFilterContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) =>
//     contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()),
//     ),
// );

import { createSelector } from 'reselect';
import {
  getAmountByPeriod,
  CostByPeriodAndCategories,
  transformMoney,
} from '../../services/hendlers';
// -----// PUBLIC //-----//
export const getStatus = store => store.public.status;
export const getFullName = store => store.public.fullName;
export const getSession = store => store.public.session;
export const getIsLogin = store => store.public.isLogin;

// -----// TRANSACTION //-----//
export const getBalance = store => store.transactions.balance;
export const getIncomes = store => store.transactions.income;
export const getCosts = store => store.transactions.costs;
export const getError = store => store.transactions.error;

// -----// Categories //-----//

export const getCategories = store => store.categories;
// -----// Products //-----//

export const getProducts = store => store.products;

// -----// Init //-----//
export const getInit = store => store.init;
// -----// Other logic //-----//
export const getPeriod = store => store.period;
export const getCurrentDate = store => store.currentDate;
export const getCurrentCategory = store => store.currentCategory;
export const getIsModal = store => store.isModal;
export const getIsExpenses = store => store.isExpenses;

export const getCostsStatistic = createSelector(
  [getPeriod, getCosts],
  (period, costs) =>
    getAmountByPeriod({ data: costs, startPeriod: period, viewOld: 6 }),
);

export const getIncomesStatistic = createSelector(
  [getPeriod, getIncomes],
  (period, data) =>
    getAmountByPeriod({
      data,
      startPeriod: period,
      viewOld: 6,
    }),
);
export const getMonthCosts = createSelector(
  [getCostsStatistic],
  costs => costs[0].amount,
);
export const getMonthIncomes = createSelector(
  [getIncomesStatistic],
  incomes => incomes[0].amount,
);
export const getCostByPeriodAndCategories = createSelector(
  [getPeriod, getCosts, getCategories],
  (period, costs, categories) =>
    CostByPeriodAndCategories(period, costs, categories),
);
export const getDataCharts = createSelector(
  [getCurrentCategory, getCostByPeriodAndCategories],
  (category, costs) => {
    if (!category.length) return [];
    const sum = (acc, value) => acc + value;
    const dataByCategory = costs
      .find(item => {
        return item.name === category;
      })
      .allCosts.map(i => ({ value: i.amount, name: i.product.name }));
    const result = [...new Set(dataByCategory.map(i => i.name))].reduce(
      (acc, name) => {
        const value = dataByCategory
          .filter(i => i.name === name)
          .map(i => i.value)
          .reduce(sum);
        acc.push({ name, value });
        return acc;
      },
      [],
    );
    return result;
  },
);
export const getNewCosts = createSelector([getCosts], costs =>
  costs.map(cost => ({
    id: `${cost.forDeleteId}/${cost.costsId}`,
    date: cost.date,
    name: cost.product.name,
    category: cost.product.category.name,
    cost: transformMoney(cost.amount, true, false),
  })),
);
export const getNewIncomes = createSelector([getIncomes], incomes =>
  incomes.map(income => ({
    id: income.incomeId || income._id,
    date: income.date,
    name: 'Пополнение баланса',
    category: 'Доходы',
    cost: transformMoney(income.amount, false, false),
  })),
);
export const getDataTableMobile = createSelector(
  [getNewCosts, getNewIncomes],
  (costs, incomes) => {
    const result = costs
      .concat(incomes)
      .sort((a, b) => (a.date < b.date ? 1 : -1));
    return result;
  },
);

// export const setCostsByPeriod = createSelector([getCosts], costs =>
//   costs.reduce((acc, cost) => {
//     const key = `${thisDate(cost.date).format('YYYY-MM')}`;
//     if (!acc[key]) {
//       acc[key] = [cost];
//       return acc;
//     }
//     acc[key] = [...acc[key], cost];
//     return acc;
//   }, {}),
// );
// export const getFilterContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) =>
//     contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()),
//     ),
// );

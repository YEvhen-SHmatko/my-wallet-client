import { thisDate } from '../services/hendlers';

const initState = {
  public: {
    status: '',
    fullName: '',
    session: '',
    isLogin: false,
  },
  transactions: {
    balance: 0,
    income: [],
    costs: [],
  },
  categories: [],
  products: [],
  init: false,
  period: {
    month: +thisDate().format('M'),
    year: +thisDate().format('YYYY'),
  },
  currentDate: thisDate()._d,
  currentCategory: '',
  error: {
    message: '',
  },
  isModal: false,
  isExpenses: true,
};
export default initState;

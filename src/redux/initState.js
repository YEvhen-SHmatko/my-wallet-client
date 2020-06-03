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
    error: {
      message: '',
    },
  },
  categories: [],
  products: [],
  init: false,
  period: {
    month: +thisDate().format('M'),
    year: +thisDate().format('YYYY'),
  },
};
export default initState;

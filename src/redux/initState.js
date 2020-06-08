import { thisDate } from '../services/hendlers';
import Loader from '../components/Loader';

const initState = {
  public: {
    status: '',
    fullName: '',
    email: '',
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
  isModal: {
    open: false,
    Component: Loader,
  },
  isExpenses: true,
};
export default initState;

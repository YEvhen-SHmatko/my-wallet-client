import moment from 'moment';

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
    month: moment(new Date()).month(),
    year: moment(new Date()).year(),
  },
};

export default initState;

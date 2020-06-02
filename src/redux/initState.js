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
};

export default initState;

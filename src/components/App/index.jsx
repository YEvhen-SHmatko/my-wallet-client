import { connect } from 'react-redux';
import App from './App';
import * as selectors from '../../redux/selectors';
import transactions from '../../redux/operations/transactions';
import * as product from '../../redux/operations/product';
import * as category from '../../redux/operations/category';

const MSTP = store => ({
  isModal: selectors.getIsModal(store),
  isLogin: selectors.getIsLogin(store),
  init: selectors.getInit(store),
});
export default connect(MSTP, {
  getTransactions: transactions,
  getProduct: product.getProducts,
  getCategory: category.getCategories,
})(App);

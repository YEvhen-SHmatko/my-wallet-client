import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors';
import operationExpenses from '../../redux/operations/isExpenses';
import operationModal from '../../redux/operations/isModal';
import routes from '../../routes';
import { Mobile, Default } from '../../services/mediaQuery';
import Styles from './index.module.css';
import Trash from '../Trash';
import Cost from '../Cost';
import Date from '../MyDate';
import Category from '../Category';
import Name from '../Name';
import Button from '../Button';
import MobileModal from '../MobileModal';

const TableMobile = ({ setIsExpenses, setIsModal, data }) => {
  const history = useHistory();
  const height =
    window.innerHeight - 364 < 180 ? 180 : window.innerHeight - 364;
  const handleExpenses = () => {
    history.replace(routes.Expenses.path);
    setIsExpenses(true);
    setIsModal({ open: true, Component: MobileModal });
  };
  const handleIncomes = () => {
    history.replace(routes.Income.path);
    setIsExpenses(false);
    setIsModal({ open: true, Component: MobileModal });
  };
  return (
    <>
      <Mobile>
        {data && (
          <>
            <section
              className={Styles.section}
              style={{ height: `${height}px` }}
            >
              <ul className={Styles.list}>
                {data.map(item => (
                  <li key={item.id} className={Styles.item}>
                    <div className={Styles.first}>
                      <Name name={item.name} />
                      <div className={Styles.info}>
                        <Date date={item.date} />
                        <Category category={item.category} />
                      </div>
                    </div>
                    <div className={Styles.second}>
                      <Cost cost={item.cost} />
                      <Trash id={`${item.id}`} />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section className={Styles.btn}>
              <Button title="Pасход" onClick={handleExpenses} />
              <Button title="Доход" onClick={handleIncomes} />
            </section>
          </>
        )}
      </Mobile>
      <Default>
        <Redirect to={routes.Expenses.path} />
      </Default>
    </>
  );
};

TableMobile.propTypes = {
  // dataIncomes: PropTypes.arrayOf(PropTypes.any).isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  setIsExpenses: PropTypes.func.isRequired,
  setIsModal: PropTypes.func.isRequired,
};
const MSTP = store => ({
  data: selectors.getDataTableMobile(store),
});
export default connect(MSTP, {
  setIsExpenses: operationExpenses,
  setIsModal: operationModal,
})(TableMobile);

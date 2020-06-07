import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors';
import Styles from './index.module.css';
import { Mobile, Default } from '../../services/mediaQuery';
import Trash from '../Trash';
import Cost from '../Cost';
import MyDate from '../MyDate';
import Category from '../Category';
import Name from '../Name';

const Table = ({ isExpenses, dataIncomes, dataExpenses }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (isExpenses) {
      setData(dataExpenses);
      return;
    }
    setData(dataIncomes);
  }, [isExpenses, dataIncomes, dataExpenses]);

  return (
    <>
      <Mobile>{/* redirect */}</Mobile>
      <Default>
        <>
          <section className={Styles.section}>
            <div key="thead1" className={Styles.thead}>
              <MyDate date="ДАТА" title />
              <Name name="ОПИСАНИЕ" />
              <Category category="КАТЕГОРИЯ" />
              <Cost cost="СУММА" />
              <Trash id="trashHead" icon={false} />
            </div>
            <ul className={Styles.list}>
              {data.length !== 0 &&
                data.map(item => (
                  <li key={item.id} className={Styles.item}>
                    <MyDate date={item.date} />
                    <Name name={item.name} />
                    <Category category={item.category} />
                    <Cost cost={item.cost} />
                    <Trash id={item.id} isExpenses={isExpenses} />
                  </li>
                ))}
            </ul>
          </section>
        </>
      </Default>
    </>
  );
};
Table.propTypes = {
  isExpenses: PropTypes.bool.isRequired,
  dataIncomes: PropTypes.arrayOf(PropTypes.any).isRequired,
  dataExpenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};
const MSTP = store => ({
  dataIncomes: selectors.getNewIncomes(store),
  dataExpenses: selectors.getNewCosts(store),
  isExpenses: selectors.getIsExpenses(store),
});
export default connect(MSTP)(Table);

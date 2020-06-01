import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Styles from './index.module.css';
import { Mobile, Default } from '../../services/mediaQuery';
import Trash from '../Trash';
import Cost from '../Cost';
import Date from '../MyDate';
import Category from '../Category';
import Name from '../Name';

const Table = ({ isExpenses, dataIncomes, dataExpenses }) => {
  const [data, setData] = useState([]);
  console.log(('dataExpenses', dataExpenses));
  useEffect(() => {
    if (isExpenses) {
      setData(dataExpenses);
      return;
    }
    setData(dataIncomes);
  }, [isExpenses, dataIncomes, dataExpenses]);

  const mapper = arr => {
    if (isExpenses) {
      return arr.map(income => ({
        // id: income._id,
        // date: income.date.slice(0, 10),
        // name: 'Пополнение баланса',
        // category: 'Доходы',
        // cost: `+ ${income.amount.toFixed(2)}`,
      }));
    }
    return arr.map(income => ({
      id: income._id,
      date: income.date.slice(0, 10),
      name: 'Пополнение баланса',
      category: 'Доходы',
      cost: `+ ${income.amount.toFixed(2)}`,
    }));
  };

  return (
    <>
      <Mobile>{/* redirect */}</Mobile>
      <Default>
        <>
          <section className={Styles.section}>
            <div key="thead1" className={Styles.thead}>
              <Date date="ДАТА" />
              <Name name="ОПИСАНИЕ" />
              <Category category="КАТЕГОРИЯ" />
              <Cost cost="СУММА" />
              <Trash id="trashHead" icon={false} />
            </div>
            <ul className={Styles.list}>
              {data.length !== 0 &&
                mapper(data).map(item => (
                  <li key={item.id} className={Styles.item}>
                    <Date date={item.date} />
                    <Name name={item.name} />
                    <Category category={item.category} />
                    <Cost cost={item.cost} />
                    <Trash id={item.id} />
                  </li>
                ))}
            </ul>
          </section>
        </>
      </Default>
    </>
  );
};
const MSTP = store => ({
  dataIncomes: store.app.incomes,
  dataExpenses: store.app.costs,
});
export default connect(MSTP)(Table);

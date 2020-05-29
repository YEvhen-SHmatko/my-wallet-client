import React, { Component } from 'react';
import test from './MOCK_DATA.json';
import Styles from './index.module.css';
import { Mobile, Default } from '../../services/mediaQuery';
import Trash from '../Trash';
import Cost from '../Cost';
import Date from '../MyDate';
import Category from '../Category';
import Name from '../Name';

const Table = () => {
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
              {test.map(item => (
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

export default Table;

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as selectors from '../../redux/selectors';
import ExpensesChartBySpecificCategory from './ExpensesChartBySpecificCategory';
import { Mobile, Default } from '../../services/mediaQuery';
import Styles from './index.module.css';

const MyChart = ({ data }) => {
  const data2 = [
    { product: { name: 'chery' }, amount: 2500 },
    { product: { name: 'chery' }, amount: 4500 },
    { product: { name: 'chery' }, amount: 500 },
    { product: { name: 'chery' }, amount: 5500 },
    // { product: { name: 'chery' }, amount: 4100 },
    // { product: { name: 'chery' }, amount: 300 },
    // { product: { name: 'chery' }, amount: 2000 },
    // { product: { name: 'chery' }, amount: 1500 },
    // { product: { name: 'chery' }, amount: 500 },
    // { product: { name: 'chery' }, amount: 200 },
    //
    // { product: { name: 'chery' }, amount: 200 },
    // { product: { name: 'chery' }, amount: 200 },
    // { product: { name: 'chery' }, amount: 200 },
    // { product: { name: 'chery' }, amount: 200 },
    // { product: { name: 'chery' }, amount: 300 },
    // { product: { name: 'chery' }, amount: 2000 },
    // { product: { name: 'chery' }, amount: 1500 },
    // { product: { name: 'chery' }, amount: 500 },
    // { product: { name: 'chery' }, amount: 200 },
    // { product: { name: 'chery' }, amount: 200 },
    //
  ];
  const rend = data2.length > 10;
  // const rend = data.length > 10 || data.length < 6;
  return (
    <div className={Styles.section}>
      <Mobile>
        <ExpensesChartBySpecificCategory data={data2} isMobile currency="грн" />
      </Mobile>
      <Default>
        {rend ? (
          <ExpensesChartBySpecificCategory
            data={data2}
            isMobile
            currency="грн"
          />
        ) : (
          <ExpensesChartBySpecificCategory data={data2} currency="грн" />
        )}
      </Default>
    </div>
  );
};
MyChart.defaultProps = {
  data: [
    { product: { name: 'chery' }, amount: '2500' },
    { product: { name: 'asd' }, amount: '4500' },
    { product: { name: 'asdasd' }, amount: '500' },
    { product: { name: 'asdd' }, amount: '5500' },
    { product: { name: 'dsaa' }, amount: '4100' },
    { product: { name: 'asddd' }, amount: '300' },
    { product: { name: 'dsawwq' }, amount: '2000' },
    { product: { name: 'asdzx' }, amount: '1500' },
    { product: { name: 'asfrgf' }, amount: '500' },
    { product: { name: 'asdqw' }, amount: '200' },
  ],
};
MyChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        name: PropTypes.string,
      }).isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
  ),
};
export default MyChart;

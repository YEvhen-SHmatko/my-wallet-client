import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import * as selectors from '../../redux/selectors';
import { isMobile, isTablet } from '../../services/mediaQuery';
import Styles from './index.module.css';

const MonthStatistic = ({ statisticData }) => {
  const IsMobile = isMobile(useMediaQuery);
  const IsTablet = isTablet(useMediaQuery);
  return (
    <>
      {statisticData && statisticData.length > 0 && (
        <ul
          className={
            IsMobile
              ? Styles.Mobile_list
              : IsTablet
              ? Styles.Tablet_list
              : Styles.Desktop_list
          }
        >
          <li className={Styles.item}>сводка</li>
          {statisticData.map(item => (
            <li className={Styles.item} key={item.id}>
              <span className={Styles.month}>{item.month}</span>
              <span className={Styles.cost}>{item.amount}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

MonthStatistic.propTypes = {
  statisticData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      month: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
const MSTP = store => ({
  statisticData: selectors.getMonthStatistics(store),
});
export default connect(MSTP, null)(MonthStatistic);

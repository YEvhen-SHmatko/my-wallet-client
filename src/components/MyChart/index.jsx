import React from 'react';
import PropTypes from 'prop-types';
import ExpensesChartBySpecificCategory from './ExpensesChartBySpecificCategory';
import { Mobile, Default } from '../../services/media-query';

const index = ({ data }) => (
  <div>
    <Mobile>
      <ExpensesChartBySpecificCategory data={data} isMobile currency="грн" />
    </Mobile>
    <Default>
      <ExpensesChartBySpecificCategory data={data} currency="грн" />
    </Default>
  </div>
);
index.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cost: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default index;

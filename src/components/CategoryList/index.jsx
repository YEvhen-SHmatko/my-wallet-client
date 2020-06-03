import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as selectors from '../../redux/selectors';
// import { CategoryCostByPeriod } from '../../services/hendlers';
import Wrapper from '../Wrapper';
import CategoryIcon from '../CategoryIcon';
import Styles from './index.module.css';

const CategoryList = ({ categories }) => {
  // console.log(CategoryCostByPeriod(getCosts, getPeriod));
  const data = categories && categories.length > 0;
  return (
    <>
      <Wrapper>
        {data ? (
          <div className={Styles.section}>
            {categories.map(category => (
              <>
                <CategoryIcon
                  title={category.name}
                  cost={category.amount.replace}
                  src="./images/svg/diet.svg"
                />
              </>
            ))}
          </div>
        ) : (
          'error'
        )}
      </Wrapper>
    </>
  );
};
CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.any).isRequired,
};
const MSTP = store => ({
  categories: selectors.getCostByPeriodAndCategories(store),
});
export default connect(MSTP, null)(CategoryList);

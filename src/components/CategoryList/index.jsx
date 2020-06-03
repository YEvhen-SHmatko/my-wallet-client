import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as selectors from '../../redux/selectors';
import { transformMoney, srcIcon } from '../../services/hendlers';
import Wrapper from '../Wrapper';
import CategoryIcon from '../CategoryIcon';
import Styles from './index.module.css';

const CategoryList = ({ categories }) => {
  const data = categories && categories.length > 0;
  return (
    <>
      <Wrapper>
        {data ? (
          <div className={Styles.section}>
            {categories.map(category => (
              <CategoryIcon
                key={category.id}
                title={category.name.replace(',', ' ')}
                cost={transformMoney(category.amount, null, false)}
                src={srcIcon(category.name)}
              />
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

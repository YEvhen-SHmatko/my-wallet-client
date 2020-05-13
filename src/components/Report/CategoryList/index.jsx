import React from 'react';
// import PropTypes from 'prop-types';
import Wrapper from '../../Wrapper';
import CategoryIcon from './CategoryIcon';
import Styles from './index.module.css';

const index = () => (
  <Wrapper>
    <div className={Styles.section}>
      <CategoryIcon
        title="продукты"
        cost="5,000.00"
        src="./images/svg/diet.svg"
      />
      <CategoryIcon
        title="алкоголь"
        cost="200.00"
        src="./images/svg/cocktail.svg"
      />
      <CategoryIcon
        title="развлечения"
        cost="800.00"
        src="./images/svg/kite.svg"
      />
      <CategoryIcon
        title="здоровье"
        cost="5,000.00"
        src="./images/svg/hands-holding-heart.svg"
      />
      <CategoryIcon
        title="транспорт"
        cost="5,000.00"
        src="./images/svg/car.svg"
      />
      <CategoryIcon
        title="все для дома"
        cost="5,000.00"
        src="./images/svg/couch.svg"
      />
      <CategoryIcon
        title="техника"
        cost="5,000.00"
        src="./images/svg/tools.svg"
      />
      <CategoryIcon
        title="комуналка-связь"
        cost="5,000.00"
        src="./images/svg/invoice.svg"
      />
      <CategoryIcon
        title="спорт, хобби"
        cost="1,800.00"
        src="./images/svg/clay.svg"
      />
      <CategoryIcon
        title="образование"
        cost="2,100.00"
        src="./images/svg/book.svg"
      />
      <CategoryIcon title="прочие" cost="3,000.00" src="./images/svg/ufo.svg" />
    </div>
  </Wrapper>
);

// index.defaultProps = {
//   expens: '18,000.00',
//   income: '45,000.00',
// };
// index.propTypes = {
//   data: PropTypes.string,
//   income: PropTypes.string,
// };
export default index;

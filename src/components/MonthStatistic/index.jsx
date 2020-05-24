import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const index = ({ data }) => {
  return (
    <>
      <ul className={Styles.list}>
        <li className={Styles.item}>сводка</li>
        {data &&
          data.map(item => (
            <li className={Styles.item} key={item.id}>
              <span className={Styles.month}>{item.month}</span>
              <span className={Styles.cost}>{item.cost}</span>
            </li>
          ))}
      </ul>
    </>
  );
};

index.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
      month: PropTypes.string,
      cost: PropTypes.string,
    }),
  ).isRequired,
};
export default index;

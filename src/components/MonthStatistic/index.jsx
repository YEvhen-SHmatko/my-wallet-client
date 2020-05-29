import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../services/mediaQuery';
import Styles from './index.module.css';

const index = ({ data }) => {
  const IsMobile = isMobile(useMediaQuery);
  const IsTablet = isTablet(useMediaQuery);
  return (
    <>
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

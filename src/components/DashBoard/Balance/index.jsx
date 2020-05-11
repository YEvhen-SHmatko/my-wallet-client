import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const index = ({ value }) => {
  return (
    <div className={Styles.section}>
      <div className={Styles.title}>Баланс:</div>
      <div className={Styles.form}>
        <input className={Styles.input} type="text" value={`${value}.00 UAN`} />
        {!value && <div>test</div>}
        <button className={Styles.btn} type="button">
          Подтвердить
        </button>
      </div>
    </div>
  );
};
index.defaultProps = {
  value: 0,
};
index.propTypes = {
  value: PropTypes.number,
};
export default index;

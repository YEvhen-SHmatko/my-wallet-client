import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const index = ({ value, onChange }) => {
  return (
    <div className={Styles.section}>
      <div className={Styles.title}>Баланс:</div>
      <div className={Styles.form}>
        <input
          className={Styles.input}
          type="text"
          defaultValue={`${value}.00 UAN`}
        />
        <button className={Styles.btn} type="button">
          Подтвердить
        </button>
      </div>
    </div>
  );
};
index.defaultProps = {
  value: 0,
  onChange: e => console.log(e.target.value),
};
index.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};
export default index;

import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { isNotMobile } from '../../services/mediaQuery';
import Styles from './index.module.css';

const index = ({ value, onChange }) => {
  const IsDefault = isNotMobile(useMediaQuery);
  return (
    <div className={IsDefault ? Styles.Default_section : Styles.section}>
      <div className={IsDefault ? Styles.Default_title : Styles.title}>
        Баланс:
      </div>
      <div className={Styles.form}>
        <input
          className={IsDefault ? Styles.Default_input : Styles.input}
          type="text"
          defaultValue={`${value}.00 UAN`}
        />
        <button
          className={IsDefault ? Styles.Default_btn : Styles.btn}
          type="button"
        >
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

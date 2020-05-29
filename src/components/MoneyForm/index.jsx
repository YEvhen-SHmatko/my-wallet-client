import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';

const MoneyForm = ({ isExpenses }) => {
  const [placeholder, Placeholder] = useState(
    'Здесь ты будешь вносить на что ты тратишь деньги',
  );
  const [text, Text] = useState('');
  const [value, Value] = useState('00.00');
  const set = { Placeholder, Text, Value };
  const handleChange = e => {
    set[e.target.name](e.target.value);
  };
  const setPlaceholder = () => {
    if (isExpenses) {
      set.Placeholder('Здесь ты будешь вносить на что ты тратишь деньги');
      return;
    }
    set.Placeholder('Здесь ты будешь вносить сумму дохода');
  };
  useEffect(() => {
    setPlaceholder();
    return () => {
      setPlaceholder();
    };
  });
  const handleClear = e => {
    set.Text('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    set.Text('');
    set.Value('00.00');
  };

  return (
    <div className={Styles.section}>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <div className={Styles.section_form}>
          <textarea
            className={Styles.text}
            type="text"
            name="Text"
            value={text}
            required
            onChange={handleChange}
            placeholder={placeholder}
            rows={window.innerWidth < 768 ? 2 : 1}
          />
          <input
            className={Styles.value}
            type="text"
            name="Value"
            value={value}
            onChange={handleChange}
          />
          <button className={Styles.btn} type="button">
            <div className={Styles.icon} />
          </button>
        </div>
        <div className={Styles.section_submit}>
          <button className={Styles.action} type="button">
            ВВОД
          </button>
          <button className={Styles.action} type="button" onClick={handleClear}>
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
};
MoneyForm.defaultProps = {
  isExpenses: false,
};
MoneyForm.propTypes = {
  isExpenses: PropTypes.bool,
};
export default MoneyForm;

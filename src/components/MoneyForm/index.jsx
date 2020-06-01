import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as income from '../../redux/operations/income';
import Styles from './index.module.css';
import Wrapper from '../Wrapper';

const MoneyForm = ({ isExpenses, postIncome }) => {
  const [placeholder, setPlaceholder] = useState(
    'Здесь ты будешь вносить на что ты тратишь деньги',
  );
  const [text, setText] = useState('');
  const [newValue, setNewValue] = useState('');
  const [currentValue, setCurrentValue] = useState(`${(+newValue).toFixed(2)}`);
  const handleTextChange = e => {
    setText(e.target.value);
  };
  useEffect(() => {
    if (isExpenses) {
      setPlaceholder('Здесь ты будешь вносить на что ты тратишь деньги');
      return;
    }
    setPlaceholder('Введите сумму дохода');
  }, [isExpenses]);
  const handleClear = e => {
    if (isExpenses) {
      setCurrentValue(`${(0).toFixed(2)}`);
      setText('');
      return;
    }
    setCurrentValue(`${(0).toFixed(2)}`);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isExpenses) {
      console.log('object');
      handleClear();
      return;
    }
    postIncome(+newValue);
    handleClear();
  };
  const handleValueChange = e => {
    const { value } = e.target;
    if (!+value) return;
    if (value < 99999.99) {
      setCurrentValue(value);
    }
  };
  const handleFocus = () => {
    setCurrentValue(newValue);
  };
  const handleBlur = () => {
    setNewValue(+currentValue);
    setCurrentValue(`${(+currentValue).toFixed(2)}`);
  };
  return (
    <div className={Styles.section}>
      <div className={Styles.form}>
        <div className={Styles.section_form}>
          <div className={Styles.text_wrap}>
            <textarea
              disabled={!isExpenses}
              className={Styles.text}
              type="text"
              name="text"
              value={text}
              required
              onChange={handleTextChange}
              placeholder={placeholder}
              rows={window.innerWidth < 768 ? 2 : 1}
            />
            {!!text.length && isExpenses && (
              <Wrapper className={Styles.text_select}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt quos dolorem aspernatur facere reprehenderit? Ducimus
                soluta, nesciunt iusto corporis pariatur dolores harum nam, et
                mollitia natus sit eius fugit officiis exercitationem voluptas
                iste unde, id quos incidunt eaque atque voluptatem. Laboriosam
                veniam in iure voluptates nulla. Vitae dolor quo laboriosam.
              </Wrapper>
            )}
          </div>
          <input
            className={Styles.value}
            type="text"
            name="value"
            autoComplete="off"
            value={currentValue}
            onChange={handleValueChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button className={Styles.btn} type="button">
            <div className={Styles.icon} />
          </button>
        </div>
        <div className={Styles.section_submit}>
          <button
            className={Styles.action}
            type="button"
            onClick={handleSubmit}
          >
            ВВОД
          </button>
          <button className={Styles.action} type="button" onClick={handleClear}>
            Очистить
          </button>
        </div>
      </div>
    </div>
  );
};
MoneyForm.defaultProps = {
  isExpenses: false,
};
MoneyForm.propTypes = {
  isExpenses: PropTypes.bool,
  postIncome: PropTypes.func.isRequired,
};
export default connect(null, { postIncome: income.postIncome })(MoneyForm);

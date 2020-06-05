import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as selectors from '../../redux/selectors';
import * as income from '../../redux/operations/income';
import * as cost from '../../redux/operations/cost';
import Styles from './index.module.css';
import Wrapper from '../Wrapper';

const MoneyForm = ({ isExpenses, postIncome, postCost, dataProducts }) => {
  const [placeholder, setPlaceholder] = useState(
    'Здесь ты будешь вносить на что ты тратишь деньги',
  );
  const [text, setText] = useState('');
  const [id, setID] = useState('');
  const [newValue, setNewValue] = useState('');
  const [select, setSelect] = useState(false);
  const [currentValue, setCurrentValue] = useState(`${(+newValue).toFixed(2)}`);

  const handleTextChange = e => {
    setText(e.target.value);
    if (!select) setSelect(true);
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

  const inputProducts = data => {
    return data.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isExpenses) {
      if (id === '') return;
      if (+currentValue === 0) return;
      postCost(id, currentValue);
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

  const textBlur = () => {
    setTimeout(() => setSelect(false), 300);
  };

  const handleSelect = e => {
    setText(e.currentTarget.name);
    setID(e.currentTarget.id);
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
              onBlur={textBlur}
              onChange={handleTextChange}
              placeholder={placeholder}
              rows={window.innerWidth < 768 ? 2 : 1}
            />
            {select && isExpenses && dataProducts.length > 0 && (
              <Wrapper className={Styles.text_select}>
                <ul className={Styles.search_list}>
                  {inputProducts(dataProducts).map(product => (
                    <li className={Styles.search_item} key={product._id}>
                      <button
                        className={Styles.search_btn}
                        type="button"
                        name={product.name}
                        id={product._id}
                        onClick={handleSelect}
                      >
                        <span>{product.name}</span>
                        <span>{product.category.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
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
  dataProducts: [],
};
MoneyForm.propTypes = {
  isExpenses: PropTypes.bool,
  postIncome: PropTypes.func.isRequired,
  postCost: PropTypes.func.isRequired,
  dataProducts: PropTypes.arrayOf(PropTypes.any),
};
const MSTP = store => ({
  dataProducts: selectors.getProducts(store),
});
export default connect(MSTP, {
  postIncome: income.postIncome,
  postCost: cost.postCost,
})(MoneyForm);

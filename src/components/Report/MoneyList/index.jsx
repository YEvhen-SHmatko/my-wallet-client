import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../../Wrapper';
import Styles from './index.module.css';

const index = ({ income, expens }) => (
  <Wrapper>
    <div className={Styles.section}>
      <div className={Styles.item}>
        <div className={Styles.title}>Расходы:</div>
        <div className={Styles.minus}>{`- ${income} грн`}</div>
      </div>
      <div className={Styles.item}>
        <div className={Styles.title}>Доходы:</div>
        <div className={Styles.value}>{`+ ${expens} грн`}</div>
      </div>
    </div>
  </Wrapper>
);

index.defaultProps = {
  expens: '18,000.00',
  income: '45,000.00',
};
index.propTypes = {
  expens: PropTypes.string,
  income: PropTypes.string,
};
export default index;

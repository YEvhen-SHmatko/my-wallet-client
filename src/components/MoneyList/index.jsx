import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { isDefault } from '../../services/mediaQuery';
import Wrapper from '../Wrapper';
import Styles from './index.module.css';

const index = ({ income, expens }) => {
  const IsDefault = isDefault(useMediaQuery);
  return (
    <Wrapper>
      <div className={Styles.section}>
        <div className={IsDefault ? Styles.Default_item : Styles.Mobile_item}>
          <div
            className={IsDefault ? Styles.Default_title : Styles.Mobile_title}
          >
            Расходы:
          </div>
          <div className={Styles.minus}>{`- ${income} грн`}</div>
        </div>
        <div className={IsDefault ? Styles.Default_item : Styles.Mobile_item}>
          <div
            className={IsDefault ? Styles.Default_title : Styles.Mobile_title}
          >
            Доходы:
          </div>
          <div className={Styles.value}>{`+ ${expens} грн`}</div>
        </div>
      </div>
    </Wrapper>
  );
};

index.defaultProps = {
  expens: '18,000.00',
  income: '45,000.00',
};
index.propTypes = {
  expens: PropTypes.string,
  income: PropTypes.string,
};
export default index;

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import { useMediaQuery } from 'react-responsive';
import { isDefault } from '../../services/mediaQuery';
import Styles from './index.module.css';
import './stylingDataPicker.css';
import currentDate from '../../redux/operations/currentDate';
import * as selectors from '../../redux/selectors';

registerLocale('ru', ru);

const Calendar = ({ storeDate, setDate }) => {
  const handleChange = date => {
    setDate(date);
  };
  const IsDefault = isDefault(useMediaQuery);
  return (
    <div className={IsDefault ? Styles.Default_section : Styles.section}>
      <div className={Styles.icon} />
      <DatePicker
        locale="ru"
        dateFormat="dd.MM.yyyy"
        className={Styles.btn}
        selected={storeDate}
        onChange={handleChange}
      />
    </div>
  );
};
Calendar.propTypes = {
  storeDate: PropTypes.instanceOf(Date).isRequired,
  setDate: PropTypes.func.isRequired,
};
const MSTP = store => ({
  storeDate: selectors.getCurrentDate(store),
});
export default connect(MSTP, { setDate: currentDate })(Calendar);

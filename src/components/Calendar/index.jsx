import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import { useMediaQuery } from 'react-responsive';
import { isDefault } from '../../services/mediaQuery';
import Styles from './index.module.css';
import './stylingDataPicker.css';

registerLocale('ru', ru);

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = date => {
    setStartDate(date);
  };
  const IsDefault = isDefault(useMediaQuery);
  return (
    <div className={IsDefault ? Styles.Default_section : Styles.section}>
      <div className={Styles.icon} />
      <DatePicker
        locale="ru"
        dateFormat="dd.MM.yyyy"
        className={Styles.btn}
        selected={startDate}
        onChange={handleChange}
      />
    </div>
  );
};

export default Calendar;

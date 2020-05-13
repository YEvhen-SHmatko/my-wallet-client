import React, { Component } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import Styles from './index.module.css';
import './stylingDataPicker.css';

registerLocale('ru', ru);

class index extends Component {
  state = {
    startDate: new Date(),
  };

  handleChange = date => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    const { startDate } = this.state;
    return (
      <div className={Styles.section}>
        <div className={Styles.icon} />
        <DatePicker
          locale="ru"
          dateFormat="dd.MM.yyyy"
          className={Styles.btn}
          selected={startDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default index;

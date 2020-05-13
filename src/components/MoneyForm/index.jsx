import React, { Component } from 'react';
import Styles from './index.module.css';

const INIT_STATE = {
  placeholder: 'Здесь ты будешь вносить на что ты тратишь деньги',
  text: '',
  value: '00.00',
};
class index extends Component {
  state = INIT_STATE;

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClear = e => {
    this.setState({
      text: '',
    });
  };

  handleSubmit = e => {
    const { text, value } = this.state;
    const { placeholder } = this.props;
    e.preventDefault();
    console.log(`${placeholder}-${text}: ${value}`);
  };

  goBack = () => {
    this.props.onClick();
  };

  render() {
    const { text, value, placeholder } = this.state;
    return (
      <div className={Styles.section}>
        <form className={Styles.form} onSubmit={this.handleSubmit}>
          <div className={Styles.section_form}>
            <textarea
              className={Styles.text}
              type="text"
              name="text"
              value={text}
              required
              onChange={this.handleChange}
              placeholder={placeholder}
              rows={window.innerWidth < 768 ? 2 : 1}
            />
            <input
              className={Styles.value}
              type="text"
              name="value"
              value={value}
              onChange={this.handleChange}
            />
            <button className={Styles.btn} type="button">
              <div className={Styles.icon} />
            </button>
          </div>
          <div className={Styles.section_submit}>
            <button className={Styles.action} type="button">
              ВВОД
            </button>
            <button className={Styles.action} type="button">
              Очистить
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default index;

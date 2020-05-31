import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';
import Header from '../Header';
import Background from '../Background';
import Container from '../Container';
import MoneyForm from '../MoneyForm';
import GoBack from '../GoBack';

const Modal = ({ onClick, isExpenses }) => {
  return (
    <>
      <Header />
      <main className={Styles.main}>
        <Background />
        <Container>
          <GoBack onClick={onClick} />
          <MoneyForm isExpenses={isExpenses} />
        </Container>
      </main>
    </>
  );
};

Modal.defaultProps = {
  isExpenses: false,
};
Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  isExpenses: PropTypes.bool,
};

export default Modal;

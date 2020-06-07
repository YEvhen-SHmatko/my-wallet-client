import React from 'react';
import Styles from './index.module.css';
import Header from '../Header';
import Background from '../Background';
import Container from '../Container';
import MoneyForm from '../MoneyForm';
import GoBack from '../GoBack';

const Modal = () => {
  return (
    <section className={Styles.section}>
      <Header />
      <div>
        <Background />
      </div>
      <main className={Styles.main}>
        <Container>
          <GoBack />
          <MoneyForm />
        </Container>
      </main>
    </section>
  );
};

export default Modal;

import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';
import Header from '../../Header';
import Background from '../../Background';
import Container from '../../Container';
import MoneyForm from '../MoneyForm';
import GoBack from '../goBack';

const index = ({ onClick }) => {
  return (
    <>
      <Header />
      <main className={Styles.main}>
        <Background />
        <Container>
          <GoBack onClick={onClick} />
          <MoneyForm />
        </Container>
      </main>
    </>
  );
};

index.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default index;

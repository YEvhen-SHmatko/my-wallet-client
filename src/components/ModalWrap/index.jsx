import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css';
import Background from '../Background';
import Container from '../Container';
import GoBack from '../GoBack';
import Logo from '../Logo';

const ModalWrap = ({ children }) => {
  return (
    <section className={Styles.section}>
      <header className={Styles.header}>
        <Logo />
      </header>
      <div>
        <Background />
      </div>
      <main className={Styles.main}>
        <Container>
          <div className={Styles.goBack}>
            <GoBack />
          </div>
          {children}
        </Container>
      </main>
    </section>
  );
};
ModalWrap.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ModalWrap;

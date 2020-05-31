import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Context from '../../hooks/context';
import { authLogin, authRegister } from '../../redux/operations/auth';
import Styles from './index.module.css';
import routes from '../../routes';

const NavAuth = ({ login, register }) => {
  const AUTH_REGISTER = useLocation().pathname === routes.AUTH_REGISTER.path;
  const history = useHistory();
  const { set, get } = useContext(Context);
  const clearInput = () => {
    set().Email('');
    set().Password('');
    if (AUTH_REGISTER) {
      set().FirstName('');
      set().LastName('');
    }
  };
  const user = () => {
    const { email, password, firstName, lastName } = get();
    if (AUTH_REGISTER) {
      return {
        email,
        password,
        name: { firstName, lastName, fullName: `${firstName} ${lastName}` },
      };
    }
    return { email, password };
  };
  const handleLogin = () => {
    login(user());
    // console.log(user());
    clearInput();
  };
  const goToLogin = () => {
    clearInput();
    history.replace(routes.AUTH_LOGIN.path);
  };
  const handleRegister = () => {
    register(user());
    // console.log(user());
    clearInput();
  };
  const goToRegister = () => {
    history.replace(routes.AUTH_REGISTER.path);
    clearInput();
  };
  return (
    <section className={Styles.section}>
      {AUTH_REGISTER ? (
        <>
          <button onClick={handleRegister} type="button" className={Styles.btn}>
            Регистрация
          </button>
          <button onClick={goToLogin} type="button" className={Styles.btn}>
            Логин
          </button>
        </>
      ) : (
        <>
          <button onClick={handleLogin} type="button" className={Styles.btn}>
            Войти
          </button>
          <button onClick={goToRegister} type="button" className={Styles.btn}>
            Регистрация
          </button>
        </>
      )}
    </section>
  );
};
NavAuth.propTypes = {
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};
export default connect(null, { login: authLogin, register: authRegister })(
  NavAuth,
);

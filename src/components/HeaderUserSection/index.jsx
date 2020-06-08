import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Styles from './index.module.css';
import { authLogout } from '../../redux/operations/auth';
import setIsModal from '../../redux/operations/isModal';
import * as selectors from '../../redux/selectors';
import * as MQ from '../../services/mediaQuery';
import ModalUser from '../ModalUser';

const HeaderUserSection = ({ logout, fullName, modal }) => {
  const [infoOpen, setInfoOpen] = useState(true);
  const handleOpenInfo = () => {
    setInfoOpen(!infoOpen);
    modal({ open: true, Component: ModalUser });
  };
  return (
    <section className={Styles.section}>
      <button type="button" className={Styles.title} onClick={handleOpenInfo}>
        <span className={Styles.icon}>{fullName[0]}</span>
        <MQ.Default>
          <span className={Styles.name}>{fullName}</span>
        </MQ.Default>
      </button>
      <div className={Styles.logout}>
        <MQ.Mobile>
          <button className={Styles.btn_icon} type="button" onClick={logout}>
            <svg
              id="Capa_1"
              enableBackground="new 0 0 515.556 515.556"
              height="512"
              viewBox="0 0 515.556 515.556"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m322.222 451.111h-257.778v-386.667h257.778v32.222h64.444v-96.666h-386.666v515.556h386.667v-96.667h-64.444v32.222z" />
              <path d="m396.107 138.329-45.564 45.564 41.662 41.662h-166.65v64.445h166.65l-41.662 41.662 45.564 45.564 119.449-119.449z" />
            </svg>
          </button>
        </MQ.Mobile>
        <MQ.Default>
          <button className={Styles.btn_text} type="button" onClick={logout}>
            Выйти
          </button>
        </MQ.Default>
      </div>
    </section>
  );
};
HeaderUserSection.propTypes = {
  logout: PropTypes.func.isRequired,
  modal: PropTypes.func.isRequired,
  fullName: PropTypes.string.isRequired,
};
const MSTP = store => ({
  isLogin: selectors.getIsLogin(store),
  fullName: selectors.getFullName(store),
});
export default connect(MSTP, { logout: authLogout, modal: setIsModal })(
  HeaderUserSection,
);

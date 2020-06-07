import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import operationExpenses from '../../redux/operations/isExpenses';
import operationModal from '../../redux/operations/isModal';
import * as MQ from '../../services/mediaQuery';
import Styles from './index.module.css';
import routes from '../../routes';

const Icon = () => {
  return (
    <>
      <svg
        className={Styles.goBack_icon}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
      </svg>
      <MQ.Tablet>
        <span className={Styles.text}>Вернуться</span>
      </MQ.Tablet>
      <MQ.Desktop>
        <span className={Styles.text}>Вернуться на главную</span>
      </MQ.Desktop>
    </>
  );
};
const Goback = ({ setIsExpenses, setIsModal }) => {
  const IsMobile = MQ.isMobile(useMediaQuery);
  const IsTablet = MQ.isTablet(useMediaQuery);
  const history = useHistory();
  const handleClick = () => {
    history.replace(routes.DashBoardPage.path);
    setIsExpenses(true);
    setIsModal(false);
  };
  return (
    <>
      <MQ.Mobile>
        <button type="button" className={Styles.btn} onClick={handleClick}>
          <Icon />
        </button>
      </MQ.Mobile>
      <MQ.Default>
        <Link
          className={
            IsMobile
              ? Styles.Mobile_link
              : IsTablet
              ? Styles.Tablet_link
              : Styles.Desktop_link
          }
          to={routes.Expenses.path}
        >
          <Icon />
        </Link>
      </MQ.Default>
    </>
  );
};
Goback.propTypes = {
  setIsExpenses: PropTypes.func.isRequired,
  setIsModal: PropTypes.func.isRequired,
};
export default connect(null, {
  setIsExpenses: operationExpenses,
  setIsModal: operationModal,
})(Goback);

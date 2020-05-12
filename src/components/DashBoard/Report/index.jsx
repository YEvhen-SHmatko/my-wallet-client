import React from 'react';
import PropTypes from 'prop-types';
import MyLink from '../MyLink';
import Styles from './index.module.css';
import { Mobile, Default } from '../../../services/media-query';

const index = ({ to }) => {
  return (
    <>
      <Mobile>
        <MyLink to="/" newStyles={Styles.left}>
          Перейти к отчетам
        </MyLink>
      </Mobile>
      <Default>
        <MyLink to="/" newStyles={Styles.right}>
          Перейти к отчетам
        </MyLink>
      </Default>
    </>
  );
};
index.defaultProps = {
  to: '',
};
index.propTypes = {
  to: PropTypes.string,
};
export default index;

import React from 'react';
import MyLink from '../MyLink';
import Styles from './index.module.css';
import routes from '../../routes';
import { Mobile, Default } from '../../services/mediaQuery';

const ReportLink = () => {
  return (
    <>
      <Mobile>
        <MyLink to={routes.ReportPage.path} newStyles={Styles.left}>
          Перейти к отчетам
        </MyLink>
      </Mobile>
      <Default>
        <MyLink to={routes.ReportPage.path} newStyles={Styles.right}>
          Перейти к отчетам
        </MyLink>
      </Default>
    </>
  );
};
export default ReportLink;

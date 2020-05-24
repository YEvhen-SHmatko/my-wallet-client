import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Styles from './index.module.css';
import { Mobile } from '../../services/media-query';

function fn(cb) {
  return cb({
    query: '(min-device-width: 1224px)',
  });
}
const index = () => {
  console.log(fn(useMediaQuery));
  return <section className={Styles.section} />;
};
export default index;

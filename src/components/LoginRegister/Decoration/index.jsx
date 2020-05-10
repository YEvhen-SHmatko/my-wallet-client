import React from 'react';
import Styles from './index.module.css';

const newStyle = ({ deg, top, right, left, bottom }) => {
  const result = {};
  if (deg) result.transform = `rotate(${+deg}deg)`;
  if (top) result.top = top;
  if (right) result.right = right;
  if (bottom) result.bottom = bottom;
  if (left) result.left = left;
  return result;
};
const Element = ({ position }) => {
  const propStyle = newStyle(position);
  return (
    <div className={Styles.element}>
      <img
        className={Styles.img}
        style={propStyle}
        src="./images/big-cabbage.png"
        alt="Kapusta"
      />
      <div className={Styles.shadow} />
    </div>
  );
};
const index = () => {
  return (
    <section className={Styles.section}>
      <Element position={{ deg: 45, top: '0', left: '0' }} />
    </section>
  );
};
export default index;

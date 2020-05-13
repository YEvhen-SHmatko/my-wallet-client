import React from 'react';
import Styles from './index.module.css';

export default function index({ onClick }) {
  return (
    <div className={Styles.goBack}>
      <svg
        onClick={onClick}
        className={Styles.goBack_icon}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
      </svg>
    </div>
  );
}

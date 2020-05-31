import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

const State = ({ children }) => {
  // -----// AUTH //-----//
  const [firstName, FirstName] = useState('asd1');
  const [lastName, LastName] = useState('asd1');
  const [email, Email] = useState('asd1@asd.asd');
  const [password, Password] = useState('asdasd');
  // -----// DashBoard //-----//
  // -----// Report //-----//
  const set = () => ({
    Email,
    Password,
    FirstName,
    LastName,
  });
  const get = () => ({
    email,
    password,
    firstName,
    lastName,
  });

  return <Context.Provider value={{ set, get }}>{children}</Context.Provider>;
};
State.propTypes = {
  children: PropTypes.node.isRequired,
};
export default State;

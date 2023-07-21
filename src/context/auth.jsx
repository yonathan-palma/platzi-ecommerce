import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export function AuthProvider({ children }) {
  const getSession = () => {
    return JSON.parse(localStorage.getItem('sign-out')) || false;
  };

  const getAccount = () => {
    return JSON.parse(localStorage.getItem('account')) || {};
    //{name, email, password}
  };

  const auth = getSession();
  const account = getAccount();
  const [session, setSession] = useState(auth);
  const [user, setUser] = useState(account);

  const setSessionInLocalStorage = (state) => {
    setSession(state);
    return window.localStorage.setItem('sign-out', JSON.stringify(state));
  };
  const setAccountLocalStorage = (state) => {
    setUser(state);
    return window.localStorage.setItem('account', JSON.stringify(state));
  };

  // const signOutInLocalStorage = JSON.parse(window.localStorage.getItem('sign-out'));
  // const accountInLocalStorage = JSON.parse(window.localStorage.getItem('account'))
  // if (signOutInLocalStorage === null) {
  //   window.localStorage.setItem('sign-out', JSON.stringify(false));
  //   window.localStorage.setItem('account', JSON.stringify({}));
  // } else {
  //   const accountStorage = JSON.parse(window.localStorage.getItem('account'));
  // }

  return (
    <AuthContext.Provider
      value={{
        session,
        setSessionInLocalStorage,
        user,
        setAccountLocalStorage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

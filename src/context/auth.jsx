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

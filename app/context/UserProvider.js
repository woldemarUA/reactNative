import React, { createContext, useState, useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { login, logOut } from '../firebase/auth';
import { auth } from '../firebase/firebaseConf';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setIsAuth(true);
        setUser(firebaseUser);
      } else {
        setIsAuth(false);
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (userLoginData, onSuccess) => {
    try {
      const user = await login(userLoginData);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const handleLogout = async (redirect) => {
    try {
      await logOut();
      if (redirect) redirect();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <UserContext.Provider value={{ handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

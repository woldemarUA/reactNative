import React, { createContext, useState, useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { login, logOut, register } from '../firebase/auth';
import { auth } from '../firebase/firebaseConf';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
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
        setProfile(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (userLoginData, onSuccess) => {
    try {
      const user = await login(userLoginData);

      setUser(user);
      const {
        displayName,
        email,
        emailVerified,
        phoneNumber,
        photoURL,
        lastLoginAt,
      } = user.user.user;
      const profile = {
        displayName,
        email,
        emailVerified,
        phoneNumber,
        photoURL,
        lastLoginAt,
      };

      setProfile(profile);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const handleRegister = async (userRegisterData, onSuccess) => {
    try {
      await register(userRegisterData);
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
    <UserContext.Provider
      value={{ handleLogin, handleLogout, handleRegister, user, profile }}>
      {children}
    </UserContext.Provider>
  );
};

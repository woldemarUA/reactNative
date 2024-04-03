import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './firebaseConf';

export const login = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return { message: 'Auth scuccess', user: userCredential };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const register = async ({ email, password }) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const logOut = async () => {
  try {
    signOut(auth);
    return { message: 'Logout scuccess' };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

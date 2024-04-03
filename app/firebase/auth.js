import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
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

export const logOut = async () => {
  try {
    signOut(auth);
    return { message: 'Logout scuccess' };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

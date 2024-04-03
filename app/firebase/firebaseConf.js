import Constants from 'expo-constants';

import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: Constants.expoConfig.extras.firebase_apiKey,
  authDomain: Constants.expoConfig.extras.firebase_authDomain,
  projectId: Constants.expoConfig.extras.firebase_projectId,
  storageBucket: Constants.expoConfig.extras.firebase_storageBucket,
  messagingSenderId: Constants.expoConfig.extras.firebase_messaginSenderId,
  appId: Constants.expoConfig.extras.firebase_appId,
  measurementId: Constants.expoConfig.extras.firebase_measurementId,
  databaseURL: Constants.expoConfig.extras.firebase_databaseURL,
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { firebaseApp, getAnalytics, auth };

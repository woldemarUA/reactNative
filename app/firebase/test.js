import { firebaseApp } from './firebaseConf';
import { getDatabase, ref, set } from 'firebase/database';

const db = getDatabase(firebaseApp);

const dbRef = ref(db);

const data = {
  message: 'Heloof database',
};

export const testFirebase = () => {
  set(dbRef, data)
    .then(() => console.log('data written successfully'))
    .catch((err) => {
      console.error('Firebase error', err);
    });
};

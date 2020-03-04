import firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAJ7H6BrYbYQgwAL6ejgIJqamNDUSE1Hww',
  authDomain: 'crwn-db-32671.firebaseapp.com',
  databaseURL: 'https://crwn-db-32671.firebaseio.com',
  projectId: 'crwn-db-32671',
  storageBucket: 'crwn-db-32671.appspot.com',
  messagingSenderId: '406095453146',
  appId: '1:406095453146:web:39e3652bab0bae5821bee3',
  measurementId: 'G-NVZDWF00D0'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore1.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;

    try {
      await userRef.set({
        displayName,
        email,
        createdAt: new Date(),
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore1 = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

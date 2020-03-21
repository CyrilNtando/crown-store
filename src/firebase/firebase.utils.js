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
firebase.initializeApp(config);
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

//create a collection of document into database
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore1.collection(collectionKey);
  //batch allows us to group all call together into one big request
  const batch = firestore1.batch();

  objectsToAdd.forEach(obj => {
    //make a new ref object or  document
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  //execute batch file
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
export const auth = firebase.auth();
export const firestore1 = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

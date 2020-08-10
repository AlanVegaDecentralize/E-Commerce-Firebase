import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

const config = {
  apiKey: 'AIzaSyB4z5M55-lJRmP_ghopUmjQzg29-6ltvYk',
  authDomain: 'e-commerce-10429.firebaseapp.com',
  databaseURL: 'https://e-commerce-10429.firebaseio.com',
  projectId: 'e-commerce-10429',
  storageBucket: 'e-commerce-10429.appspot.com',
  messagingSenderId: '556537645479',
  appId: '1:556537645479:web:b5102686790246ea9fce82',
  measurementId: 'G-KVSXN24FQS',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  try {
    const userRef = await firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdOn = new Date();

      try {
        // Can only make and individual set call at a time
        await userRef.set({
          displayName,
          email,
          createdOn,
          ...additionalData,
        });
      } catch (error) {
        console.log('Error creating user:', error.message);
      }
    }

    return userRef;
  } catch (error) {
    console.log('Error creating user profile document:', error.message);
  }
};

// Data upload
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  // Fires batch call
  return await batch.commit();
};

export const converCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  console.log(transformedCollection);
};

// Google provider for Auth Pop-Up
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

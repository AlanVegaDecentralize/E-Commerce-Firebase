import firebase from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

const config = {
  apiKey: "AIzaSyB4z5M55-lJRmP_ghopUmjQzg29-6ltvYk",
  authDomain: "e-commerce-10429.firebaseapp.com",
  databaseURL: "https://e-commerce-10429.firebaseio.com",
  projectId: "e-commerce-10429",
  storageBucket: "e-commerce-10429.appspot.com",
  messagingSenderId: "556537645479",
  appId: "1:556537645479:web:b5102686790246ea9fce82",
  measurementId: "G-KVSXN24FQS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBUVk6qJeJIawQUdh-sNwC7TAryPvMweD8",
  authDomain: "apparent-extract.firebaseapp.com",
  projectId: "apparent-extract",
  storageBucket: "apparent-extract.appspot.com",
  messagingSenderId: "275606420921",
  appId: "1:275606420921:web:025837a826104ccfcd8a68",
  measurementId: "G-L9PZTX722F",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

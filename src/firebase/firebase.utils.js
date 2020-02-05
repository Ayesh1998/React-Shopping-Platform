import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBEw3qtLevVqUm_jJKAY5zZFXJ06SNql6w",
  authDomain: "shopping-spa-react.firebaseapp.com",
  databaseURL: "https://shopping-spa-react.firebaseio.com",
  projectId: "shopping-spa-react",
  storageBucket: "shopping-spa-react.appspot.com",
  messagingSenderId: "381698432487",
  appId: "1:381698432487:web:2b50b8c19be96e36e57142",
  measurementId: "G-4VC5NBR7W8"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCXcWXQAUiqwS9KWunM5af0dPdENmqOL7s",
    authDomain: "own-db.firebaseapp.com",
    databaseURL: "https://own-db.firebaseio.com",
    projectId: "own-db",
    storageBucket: "",
    messagingSenderId: "347842594002",
    appId: "1:347842594002:web:0fe12b788dadac6c"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    console.log(firestore.doc('users/124575125274'))
  }

  firebase.initializeApp(config);
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
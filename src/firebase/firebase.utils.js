import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC182RDX_inWjLGfuv6rupbpTSH53TCAe0",
    authDomain: "udemy-ecom-96564.firebaseapp.com",
    projectId: "udemy-ecom-96564",
    storageBucket: "udemy-ecom-96564.appspot.com",
    messagingSenderId: "404314815480",
    appId: "1:404314815480:web:36083b08cea70308bd340d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
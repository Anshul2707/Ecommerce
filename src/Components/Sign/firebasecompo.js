import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
    {
        apiKey: "AIzaSyCQw5m7HSHply77rhCF6cT1C0-Fi7tO8Ig",
        authDomain: "ecommerce-4c92c.firebaseapp.com",
        projectId: "ecommerce-4c92c",
        storageBucket: "ecommerce-4c92c.appspot.com",
        messagingSenderId: "982775860179",
        appId: "1:982775860179:web:03c125cb168aa9d6d7bd26",
        measurementId: "G-VLKDTGHTRC"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'Select Account'});
export const signInWithGoogle = () => auth.signInWithPopup( provider);

export default firebase;
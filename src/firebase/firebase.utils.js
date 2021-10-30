import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB08272tzj_iexQyXnEBcfYkGRCatR3rA0",
    authDomain: "hackathon4.firebaseapp.com",
    databaseURL: "https://hackathon4.firebaseio.com",
    projectId: "firebase-hackathon4",
    storageBucket: "firebase-hackathon4.appspot.com",
    messagingSenderId: "427713781600",
    appId: "1:427713781600:web:3e566c3d1886bb17830805"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
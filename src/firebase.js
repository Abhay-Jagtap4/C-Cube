import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

/* A configuration object that is used to initialize the firebase app. */
const firebaseConfig = {
    apiKey: "AIzaSyANFV2jskFDZzz7vYkyjGp4CVWqealnVF8",
    authDomain: "c-cube-project.firebaseapp.com",
    projectId: "c-cube-project",
    storageBucket: "c-cube-project.appspot.com",
    messagingSenderId: "247239783524",
    appId: "1:247239783524:web:fcd2dc4fce0cb093049b71",
    measurementId: "G-D4TMXWKX2H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
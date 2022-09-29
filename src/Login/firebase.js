import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAh6MUb99nyvy3zL5yTTd40HJBBOjmplsM",
    authDomain: "vizu-store.firebaseapp.com",
    projectId: "vizu-store",
    storageBucket: "vizu-store.appspot.com",
    messagingSenderId: "254304946040",
    appId: "1:254304946040:web:f7f1c444f0f89d6e0bea8d",
    measurementId: "G-VK2VW0S42L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyDJStWPag74Y0zD_yVP6tWddPRLgaLuV4A',
    authDomain: 'movify-ceda2.firebaseapp.com',
    projectId: 'movify-ceda2',
    storageBucket: 'movify-ceda2.appspot.com',
    messagingSenderId: '375712662363',
    appId: '1:375712662363:web:327024f8ec181d1236d07e',
    measurementId: 'G-7ZYRL2V0XT'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { googleAuthProvider, firebase, db as default };

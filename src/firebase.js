import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';

const config = ({
    apiKey: "AIzaSyBua2mKlcRIul1i-WDbD4_u5ZMW11RQ5LY",
    authDomain: "hotelsp21-c65c1.firebaseapp.com",
    databaseURL: "https://hotelsp21-c65c1-default-rtdb.firebaseio.com",
    projectId: "hotelsp21-c65c1",
    storageBucket: "hotelsp21-c65c1.appspot.com",
    messagingSenderId: "639634462500",
    appId: "1:639634462500:web:d6c93719e94ac9e66a05b1",
});

const app = firebase.initializeApp(config);
export const db = app.firestore();
export const auth = app.auth();
export const storage = app.storage();
export {firebase};
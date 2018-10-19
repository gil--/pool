import * as firebase from 'firebase';
import Rebase from 're-base';
require('firebase/firestore');

const app = firebase.initializeApp({
    apiKey: process.env.FIREBASE_apiKey,
    authDomain: process.env.FIREBASE_authDomain,
    databaseURL: process.env.FIREBASE_databaseURL,
    projectId: process.env.FIREBASE_projectId,
    storageBucket: process.env.FIREBASE_storageBucket,
    messagingSenderId: process.env.FIREBASE_messagingSenderId,
});

let firestore = app.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

const base = Rebase.createClass(firestore);
export default base;
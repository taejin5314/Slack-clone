// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyArnSMVOB7sd6wyN3Q4Vv2N0KLo1-hBjBM",
    authDomain: "slack-clone-b4d99.firebaseapp.com",
    databaseURL: "https://slack-clone-b4d99.firebaseio.com",
    projectId: "slack-clone-b4d99",
    storageBucket: "slack-clone-b4d99.appspot.com",
    messagingSenderId: "709703757620",
    appId: "1:709703757620:web:32dd2050a2e221dc287f61",
    measurementId: "G-YHPG8HD4FF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider;

export { auth, provider };
export default db;
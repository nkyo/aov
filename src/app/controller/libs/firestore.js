import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyD541eUtTNIkZB1GLTwmG5DmNqfYN3_XPw",
    authDomain: "banpick-820e5.firebaseapp.com",
    projectId: "banpick-820e5",
    storageBucket: "banpick-820e5.appspot.com",
    messagingSenderId: "776443357600",
    appId: "1:776443357600:web:721d5d8619c2208d90dcc5",
    measurementId: "G-5W0SB3313Q"
};

const firebaseApp = initializeApp(config);
const db = getFirestore();


// @TODO - remove below in prod
// use emulator
connectFirestoreEmulator(db, 'localhost', 8080);

export default db;



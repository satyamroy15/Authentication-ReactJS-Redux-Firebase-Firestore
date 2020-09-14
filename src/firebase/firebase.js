import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-Q6_tm6UnO5ydQv_1XTOlc1z1D_RYffE",
    authDomain: "authit-8782e.firebaseapp.com",
    databaseURL: "https://authit-8782e.firebaseio.com",
    projectId: "authit-8782e",
    storageBucket: "authit-8782e.appspot.com",
    messagingSenderId: "844022202429",
    appId: "1:844022202429:web:331ad2a57db2a48fd76a54",
    measurementId: "G-LXL7DFWP1F"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
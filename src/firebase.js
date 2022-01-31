import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCqno0RszJOtxqqEFjzJFqowXX9E91Ns-M",
    authDomain: "your-opinion-50f97.firebaseapp.com",
    projectId: "your-opinion-50f97",
    storageBucket: "your-opinion-50f97.appspot.com",
    messagingSenderId: "865901811224",
    appId: "1:865901811224:web:39b38d205ed9badef6556d",
    measurementId: "G-HEYCZNGKED"
}).auth();
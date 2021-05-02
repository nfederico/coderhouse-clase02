import firebase from 'firebase/app';
// import firebase from 'firebase';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {

    apiKey: "AIzaSyCcrObj10l0CwpJAQyLEKyW-MbJsjUtP4Q",
    
    authDomain: "americana-d33db.firebaseapp.com",
    
    projectId: "americana-d33db",
    
    storageBucket: "americana-d33db.appspot.com",
    
    messagingSenderId: "594240839205",
    
    appId: "1:594240839205:web:2b86e631769681347b29cc"
    
    };
    
    // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
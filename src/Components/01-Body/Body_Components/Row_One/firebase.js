import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const key = process.env.REACT_APP_API_KEY;

var firebaseConfig = {
	apiKey: key,
	authDomain: "cp-lgaj.firebaseapp.com",
	projectId: "cp-lgaj",
	storageBucket: "cp-lgaj.appspot.com",
	messagingSenderId: "22154591612",
	appId: "1:22154591612:web:2b4c3f0586b28d2dc1b8f9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;

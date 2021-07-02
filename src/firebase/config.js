import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCdrtsu84kiFFI8Ncy9WB8CD9XAZQUzy1o",
  authDomain: "react-firegram-b4dd0.firebaseapp.com",
  projectId: "react-firegram-b4dd0",
  storageBucket: "react-firegram-b4dd0.appspot.com",
  messagingSenderId: "398800348784",
  appId: "1:398800348784:web:9e7cc79f705124473f36b5",
  measurementId: "G-B6VGEJ636Z",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

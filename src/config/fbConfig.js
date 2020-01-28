import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAZ1CYDJAO4Sme_xEaeaoFWUeGKz8dOFHQ",
  authDomain: "react-redux-firebase-d53cd.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-d53cd.firebaseio.com",
  projectId: "react-redux-firebase-d53cd",
  storageBucket: "react-redux-firebase-d53cd.appspot.com",
  messagingSenderId: "179465813367",
  appId: "1:179465813367:web:2eeaaa151b0609dc24b572",
  measurementId: "G-LXLMWCYF12"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase

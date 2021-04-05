import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCAPVPdW0Gi_9V3nq2XqkptuQvddJnhyPE",
  authDomain: "slack-b63ee.firebaseapp.com",
  projectId: "slack-b63ee",
  storageBucket: "slack-b63ee.appspot.com",
  messagingSenderId: "1065402963485",
  appId: "1:1065402963485:web:f351684a9234d8890b98f4",
  measurementId: "G-VT5MW9DV5F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, db, provider}

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1QzKcbsBrHZXeEb6OTwgwuDyNz0mX1OQ",
  authDomain: "imessage-clone-86448.firebaseapp.com",
  projectId: "imessage-clone-86448",
  storageBucket: "imessage-clone-86448.appspot.com",
  messagingSenderId: "890193299490",
  appId: "1:890193299490:web:4a818922ae97c6a19ba27b",
  measurementId: "G-1HN31Z1BZH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

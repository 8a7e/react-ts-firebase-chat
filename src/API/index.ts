import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOSHZiq5FtDl7Bb3P45lur6IQJtzbxx3Q",
  authDomain: "chat-react-4c8b6.firebaseapp.com",
  projectId: "chat-react-4c8b6",
  storageBucket: "chat-react-4c8b6.appspot.com",
  messagingSenderId: "64897910078",
  appId: "1:64897910078:web:dd55c37d9351cfd3b1d86f",
  measurementId: "G-1HVNTT3529",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const messages = firestore.collection("messages");

export const firebaseAPI = {
  store: firestore,
  auth: getAuth(firebaseApp),
  messages: messages,
  login: () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      firebase.auth().signInWithPopup(provider);
    } catch (err) {
      console.error(err);
    }
  },
  logout: () => {
    try {
      firebase.auth().signOut();
    } catch (err) {
      console.error(err);
    }
  },
  sendMessage: (user: any, message: string) => {
    try {
      messages.add({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (err) {
      console.error(err);
    }
  },
};

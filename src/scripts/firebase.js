// NPM Package
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Using the Projectcredentials
const firebaseConfiguration = {
  apiKey: "AIzaSyBxqIk6WjthYB83JM1cWkMjlEbKaJnx5xg",
  authDomain: "openfire-bbqexperience.firebaseapp.com",
  projectId: "openfire-bbqexperience",
  storageBucket: "openfire-bbqexperience.appspot.com",
  messagingSenderId: "557620078829",
  appId: "1:557620078829:web:859076ca4c31aac92b44e4",
};

const firebaseInstance = initializeApp(firebaseConfiguration);
export const fireStoreInstance = getFirestore(firebaseInstance);

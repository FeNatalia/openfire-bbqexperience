// NPM Package
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfiguration = {
  apiKey: "AIzaSyBxqIk6WjthYB83JM1cWkMjlEbKaJnx5xg",
  authDomain: "openfire-bbqexperience.firebaseapp.com",
  projectId: "openfire-bbqexperience",
  storageBucket: "openfire-bbqexperience.appspot.com",
  messagingSenderId: "557620078829",
  appId: "1:557620078829:web:859076ca4c31aac92b44e4",
};

export const app = initializeApp(firebaseConfiguration);

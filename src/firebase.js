// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOAVuFYVYmMLg25dlj-RytX3qg3CiSBOA",
  authDomain: "demo2project-ec44f.firebaseapp.com",
  projectId: "demo2project-ec44f",
  storageBucket: "demo2project-ec44f.appspot.com",
  messagingSenderId: "1030512586605",
  appId: "1:1030512586605:web:98f0c7b184f6bdead67464"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth =firebase.auth();
export {firebase,auth}
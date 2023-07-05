import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAsqwKSC0VzLX5vcv_7F27NKmU3i_Ip8Zg",
    authDomain: "autopartes-auth.firebaseapp.com",
    projectId: "autopartes-auth",
    storageBucket: "autopartes-auth.appspot.com",
    messagingSenderId: "173821201945",
    appId: "1:173821201945:web:039e792453ed1d20322488"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
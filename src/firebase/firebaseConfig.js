import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

//Web app firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDHk1uxWffMlx5GxMSs3xBAPROK_jSfoUQ",
  authDomain: "cookbook-pro-49b95.firebaseapp.com",
  projectId: "cookbook-pro-49b95",
  storageBucket: "cookbook-pro-49b95.appspot.com",
  messagingSenderId: "736357828051",
  appId: "1:736357828051:web:13ab244e0091e572e0db26",
  measurementId: "G-W0JYCB6Z35"
};

//init firebase

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseDB = getFirestore(firebaseApp);
export { firebaseApp, firebaseAuth, firebaseDB };

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3VsF5JVPipkM1tK-XIGz_1WJtTCeF36o",
    authDomain: "cookbookpro-b0ab9.firebaseapp.com",
    databaseURL: "https://cookbookpro-b0ab9-default-rtdb.firebaseio.com",
    projectId: "cookbookpro-b0ab9",
    storageBucket: "cookbookpro-b0ab9.appspot.com",
    messagingSenderId: "268760471315",
    appId: "1:268760471315:web:d313a9bc3b89938f52ece6",
    measurementId: "G-VJTZ440FD8"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
export default firebaseApp;
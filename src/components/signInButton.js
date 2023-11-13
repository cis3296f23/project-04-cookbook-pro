import React from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import firebaseApp from '../firebase/firebase.js';

const SignInButton = () => {

  const handleGoogle = async (e) => {
    const provider = await new GoogleAuthProvider(); //Wait for popup Auth
    const auth = getAuth(firebaseApp);
    return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const email = user.email;
      console.log(email);
    })
  }


  return (
    <button onClick={handleGoogle}>Sign In with Google</button>
  );
};

export default SignInButton;
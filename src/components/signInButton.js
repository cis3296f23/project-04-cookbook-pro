import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {auth} from '../firebaseConfig.js';


const SignInButton = () => {

  const handleGoogle = async (e) => {
    const provider = await new GoogleAuthProvider();
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

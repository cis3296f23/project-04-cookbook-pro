import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {auth} from '../firebase/firebase.js';


const SignInButton = () => {

  const handleGoogle = async (e) => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const email = user.email;
        console.log(email);
    } catch (error) {
        console.error('Authentication error:', error);
    }
  };


  return (
    <button onClick={handleGoogle}>Sign In with Google</button>
  );
};

export default SignInButton;

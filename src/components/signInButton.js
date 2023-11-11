import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const SignInButton = () => {
  const handleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      //const token = credential.accessToken;
      const user = result.user;
      const email = user.email;

      console.log('User signed in:', user.email);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.error('Error signing in:', errorMessage);
    }
  };

  return (
    <button onClick={handleSignIn}>Sign In with Google</button>
  );
};

export default SignInButton;

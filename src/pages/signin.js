
import React from 'react';
import SignInButton from '../components/signInButton';
import '../signin.css';
 
const signin = () => {
    return (
        <div className="signin-container">
            <h1>Sign in with Google</h1>
            <SignInButton />
        </div>
    );
};
 
export default signin;
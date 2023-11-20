import React, {useState, useEffect} from 'react'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import '../index.js'
import './LoginSignUp.css';
import '../firebase/firebaseConfig.js';
import './home.js'
import './SignUp.js'

var Login=()=>{
  const[userEmail, isUserEmail] = useState("");
  const[userPassword, isUserPassword] = useState("");
  const auth = getAuth();
  useEffect(()=>{
    document.title = 'CookBook-Pro: Login';
    document.body.style.backgroundColor="#E0EAFC";
  }, []);
  const checkInput=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential)=>{
      const user = userCredential.user;
      document.location.href = "/";
    }) 
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
    });
  }
  
  return(
    <div className = "LogIn">
      <h1 className="Title">Log In</h1><br />
      <form>
        <label className="Email">Email<br></br></label>
        <input value={userEmail} onChange={e => isUserEmail(e.target.value)} className = "getEmail" type="text" id="isEmail" name="isEmail"/><br/>
        <label className="Password">Password<br></br></label>
        <input value={userPassword} onChange={e => isUserPassword(e.target.value)} className="getPassword" type="text" id="isPassword" name="isPassword"/>
        <div className="InvalidInput"><span style={{color:"blue"}}>Forgot Password?</span></div><br/>
        <input className= "isValidate" type="button" id="isValid" onClick={e=>checkInput(e)} value={"Log In"} />
      </form><br></br>
      <p style={{textAlign:'center'}}><a href='/SignUp'>Dont Have An Account? Create Account</a></p>
    </div>
  )
}
export default Login;

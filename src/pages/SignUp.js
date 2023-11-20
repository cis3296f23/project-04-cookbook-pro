import React, { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../index.js";
import "./LoginSignUp.css";
import "../firebase/firebaseConfig.js";
import "./home.js";

var SignUp = () => {
  const [userName, isUserName] = useState("");
  const [userEmail, isUserEmail] = useState("");
  const [userPassword, isUserPassword] = useState("");
  const auth = getAuth();
  useEffect(() => {
    document.title = "CookBook-Pro: SignUp";
    document.body.style.backgroundColor = "#CFDEF3";
  }, []);
  const inputCredentials = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        document.location.href = "/";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="SignUp">
      <h1 className="Title">Sign Up</h1>
      <br />
      <form>
        <label className="FullName">
          Name<br></br>
        </label>
        <input
          value={userName}
          onChange={(e) => isUserName(e.target.value)}
          className="getFullName"
          type="text"
          id="isName"
          name="isName"
        />
        <br />
        <label className="Email">
          Email<br></br>
        </label>
        <input
          value={userEmail}
          onChange={(e) => isUserEmail(e.target.value)}
          className="getEmail"
          type="text"
          id="isEmail"
          name="isEmail"
        />
        <br />
        <label className="Password">
          Password<br></br>
        </label>
        <input
          value={userPassword}
          onChange={(e) => isUserPassword(e.target.value)}
          className="getPassword"
          type="text"
          id="isPassword"
          name="isPassword"
        />
        <br />
        <br />
        <input
          className="isSubmission"
          type="button"
          id="isSubmit"
          onClick={(e) => inputCredentials(e)}
          value={"Sign Up"}
        />
      </form>
    </div>
  );
};

export default SignUp;

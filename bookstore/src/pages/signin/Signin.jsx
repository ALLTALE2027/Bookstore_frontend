import React, { useState } from "react";
import "./signin.css";
import logo from "./bookstore-logo.png";
import Login from "../login/Login";
import Signup from "../signup/Signup";

const Signin = () => {
  const [loginToggle, setLoginToggle] = useState(true);
  const logIn = () => {
    setLoginToggle(true);
  };
  const signUp = () => {
    setLoginToggle(false);
  };
  return (
    <>
      <div className="main-container-signin"></div>
      <div className="app-logo">
        <img src={logo} alt="bookstore logo" className="signin-image" />
        <span className="content">Online Book Shopping</span>
      </div>
      {loginToggle && <Login logIn={logIn} signUp={signUp} />}
      {!loginToggle && <Signup logIn={logIn} signUp={signUp} />}
    </>
  );
};

export default Signin;

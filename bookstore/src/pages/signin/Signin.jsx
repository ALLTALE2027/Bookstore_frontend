import React, { useState } from "react";
import "./signin.css";
import logo from "./bookstore-logo.png";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  "app-logo": {
    position: "absolute",
    top: "25vh",
    left: "25vw",
    width: "35vw",
    height: "391px",
    background: "#f5f5f5 0% 0% no-repeat padding-box",
    borderRadius: "21px",
    opacity: "1",
  },
  ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
    "app-logo": {
      display: "none",
    },
  },
  ["@media only screen and (min-width:481px) and (max-width:768px)"]: {
    "app-logo": {
      display: "none",
    },
  },
  ["@media only screen and (min-width:769px) and (max-width:1024px)"]: {
    "app-logo": {
      left: "8vw",
      width: "50vw",
    },
  },
});

const Signin = () => {
  const classes = useStyle();
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
      <div className={classes["app-logo"]}>
        <img src={logo} alt="bookstore logo" className="signin-image" />
        <span className="content">Online Book Shopping</span>
      </div>
      {loginToggle && <Login logIn={logIn} signUp={signUp} />}
      {!loginToggle && <Signup logIn={logIn} signUp={signUp} />}
    </>
  );
};

export default Signin;

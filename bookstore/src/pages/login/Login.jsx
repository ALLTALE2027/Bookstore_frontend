import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Signup from "../signup/Signup.jsx";
import { SigninApi } from "../../services/userservices";
import { useNavigate } from "react-router-dom";

const Login = ({ logIn, signUp }) => {
  const navigate = useNavigate();
  const [userSignin, setUserSignin] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [emailmessage, setEmailmessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordmessage, setPasswordmessage] = useState("");

  const onSignin = (event) => {
    setUserSignin({ ...userSignin, [event.target.name]: event.target.value });
  };

  const SigninSuccess = (userData) => {
    console.log("sign in");
    SigninApi(userData)
      .then((login) => {
        console.log("login success", login);
        localStorage.setItem("bookstoreToken", login.data.data);
        navigate("/home");
      })
      .catch((error) => {
        console.log("login failed", error);
      });
  };
  const handleSignin = (e) => {
    e.preventDefault();
    let emailRegex = RegExp(
      "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-.]+[.][a-z A-Z 0-9 -]{2,}$"
    );
    let passwordRegex = RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
    );

    if (!emailRegex.test(userSignin.email)) {
      setEmailmessage("Invalid credentials");
      setEmailError(true);
    } else {
      setEmailmessage("");
      setEmailError(false);
    }
    if (!passwordRegex.test(userSignin.password)) {
      setPasswordmessage("Invalid credentials");
      setPasswordError(true);
    } else {
      setPasswordmessage("");
      setPasswordError(false);
    }

    if (!(emailError || passwordError)) {
      SigninSuccess(userSignin);
    }
  };
  return (
    <>
      <div className="login-box">
        <button className="login-btn" onClick={logIn}>
          Login
        </button>
        <button className="login-btn signup-btn" onClick={signUp}>
          Signup
        </button>
        <TextField
          className="email-input"
          id="outlined-basic"
          label="Email Id"
          variant="outlined"
          size="small"
          name="email"
          value={userSignin.email}
          error={emailError}
          helperText={emailmessage}
          onChange={onSignin}
        />
        <TextField
          className="email-input password-input"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          size="small"
          name="password"
          value={userSignin.password}
          error={passwordError}
          helperText={passwordmessage}
          onChange={onSignin}
        />
        <a href="#" className="forgot-password">
          Forgot Password
        </a>
        <button className="main-login-btn" onClick={handleSignin}>
          Login
        </button>
        <div className="login-divider">
          <hr className="dash-1" /> <p className="word-or">OR</p>{" "}
          <hr className="dash-1 dash-2" />
        </div>
        <button className="faceBook-button">Facebook</button>
        <button className="faceBook-button google-button">Google</button>
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { SignupApi } from "../../services/userservices";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  "login-box": {
    position: "absolute",
    top: "22vh",
    left: "50vw",
    width: "28vw",
    height: "425px",
    background: "#ffffff 0% 0% no-repeat padding-box",
    boxShadow: "0px 5px 15px #00000029",
    border: "1px solid #e4e4e4",
    borderRadius: "6px",
    opacity: 1,
  },
  ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
    "login-box": {
      left: "30vw",
      width: "50vw",
    },
  },
  ["@media only screen and (min-width:481px) and (max-width:768px)"]: {
    "login-box": {
      width: "50vw",
      left: "30vw",
    },
    "login-divider": {
      left: "16%",
    },
  },
  ["@media only screen and (min-width:769px) and (max-width:1024px)"]: {
    "login-box": {
      width: "40vw",
      left: "50vw",
    },
  },
});

const Signup = ({ logIn, signUp }) => {
  const classes = useStyle();
  const [userDetails, setUserDetails] = useState({
    fullname: "",
    email: "",
    password: "",
    mobilenumber: "",
  });

  const [fullnameError, setFullnameError] = useState(false);
  const [fullnamemessage, setFullnamemessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailmessage, setEmailmessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordmessage, setPasswordmessage] = useState("");
  const [mobileError, setMobileError] = useState(false);
  const [mobilemessage, setMobilemessage] = useState("");

  const handleChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const SignupSuccess = (userData) => {
    SignupApi(userData);
    console.log("Signup api calling");
  };
  const handleCreate = (e) => {
    e.preventDefault();
    console.log(userDetails);
    let nameRegex = RegExp("^[A-Z]{1}[a-z A-Z]{2,}$");
    let emailRegex = RegExp(
      "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-.]+[.][a-z A-Z 0-9 -]{2,}$"
    );
    let passwordRegex = RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
    );

    let mobileNumRegex = RegExp("^91 [6-9]{1}[0-9]{9}$");

    if (!nameRegex.test(userDetails.fullname)) {
      setFullnamemessage("Invalid firstname");
      setFullnameError(true);
    } else {
      setFullnamemessage("");
      setFullnameError(false);
    }
    if (!emailRegex.test(userDetails.email)) {
      setEmailmessage("Invalid email type");
      setEmailError(true);
    } else {
      setEmailmessage("");
      setEmailError(false);
    }
    if (!passwordRegex.test(userDetails.password)) {
      setPasswordmessage("Invalid password");
      setPasswordError(true);
    } else {
      setPasswordmessage("");
      setPasswordError(false);
    }

    if (!mobileNumRegex.test(userDetails.mobilenumber)) {
      setMobilemessage("Invalid mobile number type");
      setMobileError(true);
    } else {
      setMobilemessage("");
      setMobileError(false);
    }

    if (!(fullnameError || emailError || passwordError || mobileError)) {
      SignupSuccess(userDetails);
    }
  };
  return (
    <>
      <div className={classes["login-box"]}>
        <button className="login-btn" onClick={logIn}>
          Login
        </button>
        <button className="login-btn signup-btn" onClick={signUp}>
          Signup
        </button>
        <TextField
          className="email-input"
          id="outlined-basic"
          label="Full name"
          variant="outlined"
          size="small"
          name="fullname"
          value={userDetails.fullname}
          onChange={handleChange}
          error={fullnameError}
          helperText={fullnamemessage}
        />
        <TextField
          className="email-input mail-input"
          id="outlined-basic"
          label="email Id"
          variant="outlined"
          size="small"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          error={emailError}
          helperText={emailmessage}
        />
        <TextField
          className="email-input passW-input"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          size="small"
          name="password"
          value={userDetails.password}
          onChange={handleChange}
          error={passwordError}
          helperText={passwordmessage}
          type="password"
        />{" "}
        <TextField
          className="email-input Mobilenum-input"
          id="outlined-basic"
          label="Mobile number "
          variant="outlined"
          size="small"
          name="mobilenumber"
          value={userDetails.mobilenumber}
          onChange={handleChange}
          error={mobileError}
          helperText={mobilemessage}
        />
        <button className="main-Signup-btn" onClick={handleCreate}>
          Signup!!
        </button>
      </div>
    </>
  );
};
export default Signup;

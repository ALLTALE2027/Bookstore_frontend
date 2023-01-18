import React from "react";
import "./Footer.css";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  footerClass: {
    border: "1px solid black",
    position: "fixed",
    bottom: "0",
    width: "100%",
    textAlign: "start",
    paddingLeft: "20%",
    lineHeight: "2.5rem",
    backgroundColor: "#2e1d1e",
    color: "aliceblue",
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    footerClass: {
      lineHeight: "1rem",
      fontSize: "0.6rem",
      paddingLeft: "6%",
    },
  },
  ["@media only screen and (min-width: 481px) and (max-width: 899px)"]: {
    footerClass: {
      lineHeight: "2rem",
      fontSize: "0.7rem",
      paddingLeft: "10%",
    },
  },
});
function Footer() {
  const classes = useStyle();
  return (
    <footer>
      <div className={classes.footerClass}>
        Copyright © 2023, Bookstore Private Limited. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;

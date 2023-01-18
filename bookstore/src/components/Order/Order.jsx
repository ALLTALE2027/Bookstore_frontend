import React from "react";
import orderSuccessImg from "./orderplaced.jpeg";
import "./order.css";
import { makeStyles } from "@mui/styles";
import { margin } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const useStyle = makeStyles({
  "main-container-order": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "3rem",
    marginTop: "0.5%",
    paddingBottom: "5%",
  },
  "image-order": {
    height: "8%",
    width: "25%",
  },

  "order-confirmation-details": {
    width: "30%",
    textAlign: "center",
    color: "#333232",
  },
  "seller-info-table": {
    border: "1px solid #DCDCDC",
    width: "50%",
    color: "#333232",
    "& th": {
      width: "20%",
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      border: "1px solid #DCDCDC",
    },
    "& td": {
      border: "1px solid #DCDCDC",
    },
  },
  "seller-address": {
    textAlign: "left",
    width: "30%",
    padding: "2%",
  },
  "seller-contact": {
    textAlign: "center",
  },
  "btn-continue-shopping": {
    color: "#FFFFFF",
    textTransform: "uppercase",
    background: "#3371B5 0% 0% no-repeat padding-box",
    borderRadius: "3px",
    width: "15%",
  },
  "seller-info-table-first-breakpoint": {
    border: "1px solid #DCDCDC",
    width: "50%",
    color: "#333232",
    "& th": {
      width: "20%",
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      border: "1px solid #DCDCDC",
    },
    "& td": {
      border: "1px solid #DCDCDC",
    },
    display: "none",
  },
  ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
    "seller-info-table-first-breakpoint": {
      display: "block",
    },
    "seller-info-table": {
      display: "none",
    },
    "seller-address": {
      width: "50%",
    },
    "btn-continue-shopping": {
      width: "40%",
    },
  },
});
const Order = () => {
  const navigate = useNavigate();
  const classes = useStyle();
  return (
    <>
      <Header />
      <div className={classes["main-container-order"]}>
        <img
          src={orderSuccessImg}
          alt="Order success congratulations"
          className={classes["image-order"]}
        />
        <div className={classes["order-confirmation-details"]}>
          hurray!!! your order is confirmed the order id is #123456789 save the
          order id for further communication..
        </div>
        <table className={classes["seller-info-table"]}>
          <thead>
            <tr>
              <th scope="col">Email us</th>
              <th scope="col">Contact us</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>admin@bookstore.com</td>
              <td className={classes["seller-contact"]}>+91 8163475881</td>
              <td className={classes["seller-address"]}>
                42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near
                Kumarakom restaurant, HSR Layout, Bangalore 560034
              </td>
            </tr>
          </tbody>
        </table>
        <table className={classes["seller-info-table-first-breakpoint"]}>
          <thead>
            <tr>
              <th scope="col">Email us</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>admin@bookstore.com</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th scope="col">Contact us</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={classes["seller-contact"]}>+91 8163475881</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={classes["seller-address"]}>
                42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near
                Kumarakom restaurant, HSR Layout, Bangalore 560034
              </td>
            </tr>
          </tbody>
        </table>
        <button
          className={classes["btn-continue-shopping"]}
          onClick={() => navigate("/home")}
        >
          Continue shopping
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Order;

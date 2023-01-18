import React, { useState } from "react";
import "./customerdetails.css";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { addAddressAPI } from "../../services/cartservices";

const useStyle = makeStyles({
  "main-container-customer": {
    display: "flex",
    width: "65vw",
    /* margin-left: 6%, */
    marginTop: "2%",
    flexDirection: "column",
    gap: "15px",
    border: "1px solid #dcdcdc",
  },
  "address-type-radio-btns": {
    display: "flex",
    gap: "8%",
    "& input": {
      accentColor: "#a03037",
    },
  },
  "btn-continue-customer": {
    marginBottom: "2%",
    display: "flex",
    justifyContent: "flex-end",
  },
  "continue-btn-customer": {
    borderRadius: "2px",
    // backgroundColor: "transparent",
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: "1rem",
    margin: "4% 0",
    width: "7rem",
    background: "#3371b5 0% 0% no-repeat padding-box",
    marginRight: "6%",
  },
  "name-mobile-customer": {
    display: "flex",
    width: "100%",
    paddingBottom: "2%",
    gap: "5%",
    marginLeft: "5%",
  },
  ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
    "main-container-customer": {
      width: "75vw",
    },
    "address-type-radio-btns": {
      gap: "3%",
    },
    "name-mobile-customer": {
      flexDirection: "column",
      "& div": {
        margin: "1% 0px",
        width: "80%",
      },
    },
  },
  ["@media only screen and (min-width:481px) and (max-width:768px)"]: {
    "main-container-customer": {
      width: "70vw",
    },
  },
});
const Customerdetails = ({ setShowSummary, showSummary }) => {
  const classes = useStyle();
  const [isEmpty, setIsEmpty] = useState(false);
  const [address, setAddress] = useState({
    addresses: [
      {
        fullName: "",
        mobileNumber: "",
        address: "",
        city: "",
        state: "",
        type: "home",
      },
    ],
  });

  const handleChange = (event) => {
    setAddress({
      ...address,
      addresses: [
        { ...address.addresses[0], [event.target.name]: event.target.value },
      ],
    });
    isContinue();
  };

  const isContinue = () => {
    console.log("boolean");
    Object.values(address.addresses[0]).forEach((val) => {
      if (val.length === 0) {
        setIsEmpty(false);
      } else {
        setIsEmpty(true);
      }
    });
  };

  const submitAddressDetails = async () => {
    console.log("clicked", isEmpty);
    if (isEmpty) {
      await addAddressAPI(address);
      setShowSummary(true);
    } else {
      alert("Please fill the details first");
    }
  };
  return (
    <>
      <div className={classes["main-container-customer"]}>
        <div className="first-div-customer">
          <span className="customer-heading">Customer Details</span>{" "}
          <div className="add-new-address">Add New Address</div>
        </div>

        <div className={classes["name-mobile-customer"]}>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            size="small"
            name="fullName"
            value={address.addresses[0].fullName}
            onChange={handleChange}
            sx={{ width: "30%" }}
          />
          <TextField
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
            size="small"
            name="mobileNumber"
            value={address.addresses[0].mobileNumber}
            onChange={handleChange}
            sx={{ width: "30%" }}
          />
        </div>
        <div className="address-customer margin">
          <span className="address-label">Address</span>
          <textarea
            type="text"
            placeholder="Enter your address here"
            name="address"
            value={address.addresses[0].address}
            onChange={handleChange}
            className="textarea-address"
          />
        </div>
        <div className={classes["name-mobile-customer"]}>
          <TextField
            id="outlined-basic"
            label="city/town"
            variant="outlined"
            size="small"
            name="city"
            value={address.addresses[0].city}
            onChange={handleChange}
            sx={{ width: "30%" }}
          />
          <TextField
            id="outlined-basic"
            label="State"
            variant="outlined"
            size="small"
            name="state"
            value={address.addresses[0].state}
            onChange={handleChange}
            sx={{ width: "30%" }}
          />
        </div>

        <div className="address-type margin">
          <span>Type</span>
          <div className={classes["address-type-radio-btns"]}>
            <input
              type="radio"
              id="home"
              name="type"
              value="home"
              checked={address.addresses[0].type == "home"}
              onChange={handleChange}
            />
              <label htmlFor="home">Home</label>
            <input
              type="radio"
              id="work"
              name="type"
              value="work"
              checked={address.addresses[0].type == "work"}
              onChange={handleChange}
            />
              <label htmlFor="work">Work</label> {" "}
            <input
              type="radio"
              id="other"
              name="type"
              value="other"
              checked={address.addresses[0].type == "other"}
              onChange={handleChange}
            />
              <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className={classes["btn-continue-customer"]}>
          {!showSummary && (
            <button
              className={classes["continue-btn-customer"]}
              onClick={submitAddressDetails}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Customerdetails;

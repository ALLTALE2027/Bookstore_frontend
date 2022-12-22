import React from "react";
import "./customerdetails.css";
import TextField from "@mui/material/TextField";

const Customerdetails = () => {
  return (
    <>
      <div className="main-container-customer">
        <div className="first-div-customer">
          <span className="customer-heading">Customer Details</span>{" "}
          <div className="add-new-address">Add New Address</div>
        </div>

        <div className="name-mobile-customer margin">
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            size="small"
            name="fullName"
            sx={{ width: "30%" }}
          />
          <TextField
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
            size="small"
            name="mobileNumber"
            sx={{ width: "30%" }}
          />
        </div>
        <div className="address-customer margin">
          <span className="address-label">Address</span>
          <textarea
            type="text"
            placeholder="Enter your address here"
            name="address"
            className="textarea-address"
          />
        </div>
        <div className="city-state-customer margin">
          <TextField
            id="outlined-basic"
            label="city/town"
            variant="outlined"
            size="small"
            name="city"
            sx={{ width: "30%" }}
          />
          <TextField
            id="outlined-basic"
            label="State"
            variant="outlined"
            size="small"
            name="state"
            sx={{ width: "30%" }}
          />
        </div>

        <div className="address-type margin">
          <span>Type</span>
          <div className="address-type-radio-btns">
            <input type="radio" id="html" name="addressType" value="HTML" /> {" "}
            <label htmlFor="home">Home</label>
            <input type="radio" id="css" name="addressType" value="CSS" /> {" "}
            <label htmlFor="work">Work</label> {" "}
            <input type="radio" name="addressType" value="JavaScript" /> {" "}
            <label htmlFor="other">Other</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customerdetails;

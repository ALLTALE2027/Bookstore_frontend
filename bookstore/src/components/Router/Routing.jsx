import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "../../pages/signin/Signin";
import Signup from "../../pages/signup/Signup";
import Bookview from "../Bookview/Bookview";
import Cart from "../cart/Cart";
import Customerdetails from "../CustomerDetails/Customerdetails";
import Dashboard from "../Dashboard/Dashboard";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bookview" element={<Bookview />} />
        <Route path="/customer" element={<Customerdetails />} />
      </Routes>
    </div>
  );
};

export default Routing;

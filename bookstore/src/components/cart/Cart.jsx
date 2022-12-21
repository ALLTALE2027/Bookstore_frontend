import React from "react";
import PinDropIcon from "@mui/icons-material/PinDrop";
import "./cart.css";
import cartBook from "./mini-book-cart.png";
import Header from "../Header/Header";

const Cart = () => {
  return (
    <>
      <Header />
      <div className="cart-header">
        <span className="home-route">Home/ </span>
        <span>My cart (1)</span>
      </div>
      <div className="main-container-cart">
        <div className="first-div">
          <div className="mycart-location">
            <div className="cart-count change-display-left">
              <span className="Books">My cart </span>
              <span className="book-count">(1)</span>
            </div>

            <div className="select-location">
              <PinDropIcon fontSize="small" sx={{ color: "#A03037" }} />
              <select className="sort-by-cartlocation">
                <option value="volvo">Use current location</option>
              </select>
            </div>
          </div>
          <div className="book-details-cart">
            <div className="change-display-left">
              <img src={cartBook} alt="cart book" />
            </div>
            <div className="book-details">
              <div>Don't Make Me Think</div>
              <div className="incart-author"> by Steve Krug</div>
              <div className="incart-price">
                <span className="incart-price">Rs. 1500 </span>
                <span className="priceBox1-display incart-discount">
                  Rs. 2000
                </span>
              </div>
            </div>
          </div>
          <div className="quantity-buttons">
            <div className="btnsAndcount-cart">
              <button className="quantity-button-cart">-</button>
              <span className="book-count-cart">1</span>
              <button className="quantity-button-cart">+</button>
            </div>
            <div>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
          <div className="placeorder-cart">
            <div className="order-btn-cart">Place order</div>
          </div>
        </div>

        <div className="second-div">
          <div className="address-cart change-display-left">
            Address Details
          </div>
        </div>
        <div className="third-div">
          <div className="ordersummary-cart change-display-left">
            Order Summary
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

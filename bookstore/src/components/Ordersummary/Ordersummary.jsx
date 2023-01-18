import React from "react";
import cartBook from "../cart/mini-book-cart.png";
import { makeStyles } from "@mui/styles";
import "./ordersummary.css";
import { checkoutCart } from "./../../services/cartservices";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles({
  "book-details": {
    display: "flex",
    flexDirection: "column",
    width: "20%",
  },
});

const Ordersummary = ({ books, cart }) => {
  const navigate = useNavigate();
  const classes = useStyle();
  const handlePurchase = async () => {
    await checkoutCart(cart._id);
    console.log("cart is purchased");
    navigate("/orderplaced");
  };
  return (
    <>
      <div className="first-div">
        <div className="allCartBooks" style={{ paddingTop: "2%" }}>
          {books.map((book) => (
            <div className="book-details-cart" key={book._id}>
              <div className="change-display-left">
                <img src={cartBook} alt="cart book" />
              </div>
              <div className={classes["book-details"]}>
                <div className="book-name-cart">{book.bookName}</div>
                <div className="incart-author"> by {book.author}</div>
                <div className="incart-price">
                  <span className="incart-price">Rs.1500 </span>
                  <span className="priceBox1-display incart-discount">
                    Rs.{book.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-checkout">
          <button className="checkout-btn-order" onClick={handlePurchase}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Ordersummary;

import React, { useState, useEffect } from "react";
import PinDropIcon from "@mui/icons-material/PinDrop";
import "./cart.css";
import cartBook from "./mini-book-cart.png";
import Header from "../Header/Header";
import Customerdetails from "../CustomerDetails/Customerdetails";
import {
  getCartDetailsAPI,
  addToCartAPI,
  removeFromCartAPI,
  deleteFromCartAPI,
} from "../../services/cartservices";
import { makeStyles } from "@mui/styles";
import Ordersummary from "../Ordersummary/Ordersummary";
import Footer from "../Footer/Footer";

const useStyle = makeStyles({
  "main-container-cart": {
    display: "flex",
    width: "65vw",
    marginLeft: "6%",
    marginTop: "2%",
    flexDirection: "column",
    gap: "15px",
    paddingBottom: "5%",
  },

  "book-details": {
    display: "flex",
    flexDirection: "column",
    width: "20%",
  },
  "quantity-buttons": {
    display: "flex",
    marginLeft: "17.5%",
    gap: "5%",
    paddingBottom: "3%",
  },
  "order-btn-cart": {
    borderRadius: "2px",
    backgroundColor: "transparent",
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: "1rem",
    margin: "4% 0",
  },
  Books: {
    fontSize: "1.2em",
    fontWeight: "500",
  },

  ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
    "main-container-cart": {
      width: "75vw",
    },

    "book-details": {
      width: "40%",
    },
    "quantity-buttons": {
      gap: "25%",
    },
    "order-btn-cart": {
      fontSize: "0.5rem",
    },
    Books: {
      fontSize: "1em",
    },
  },
  ["@media only screen and (min-width:481px) and (max-width:768px)"]: {
    "main-container-cart": {
      width: "70vw",
    },

    "book-details": {
      width: "40%",
    },

    "quantity-buttons": {
      gap: "25%",
    },
    "order-btn-cart": {
      fontSize: "0.8rem",
    },
  },
});

const Cart = () => {
  const classes = useStyle();
  const [addAddress, setAddAddress] = useState(false);
  const toggleAddress = () => {
    setAddAddress(true);
  };
  const [bookArray, setBookArray] = useState([]);
  const [cartDetails, setCartDetails] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  const incrementBookQuantity = async (id) => {
    await addToCartAPI(id);
    getBooksFromCart();
  };
  const decrementBookQuantity = async (id) => {
    await removeFromCartAPI(id);
    getBooksFromCart();
  };

  const onRemoveBook = async (id) => {
    await deleteFromCartAPI(id);
    getBooksFromCart();
  };
  const getBooksFromCart = () => {
    getCartDetailsAPI()
      .then((response) => {
        console.log("books array", response);
        setCartDetails(response.data.data);
        setBookArray(response.data.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getBooksFromCart();
  }, []);
  return (
    <>
      <Header />
      <div className="cart-header">
        <span className="home-route">Home/ </span>
        <span>My cart (1)</span>
      </div>
      <div className={classes["main-container-cart"]}>
        <div className="first-div">
          <div className="mycart-location">
            <div className="cart-count change-display-left">
              <span className={classes.Books}>My cart </span>
              <span className="book-count">(1)</span>
            </div>

            <div className="select-location">
              <PinDropIcon fontSize="small" sx={{ color: "#A03037" }} />
              <select className="sort-by-cartlocation">
                <option value="volvo">Use current location</option>
              </select>
            </div>
          </div>
          <div className="allCartBooks">
            {bookArray.map((book) => (
              <div key={book._id}>
                <div className="book-details-cart">
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
                <div className={classes["quantity-buttons"]}>
                  <div className="btnsAndcount-cart">
                    <button
                      className="quantity-button-cart"
                      onClick={() => decrementBookQuantity(book._id)}
                    >
                      -
                    </button>
                    <span className="book-count-cart">{book.quantity}</span>
                    <button
                      className="quantity-button-cart"
                      onClick={() => {
                        incrementBookQuantity(book._id);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <button
                      className="remove-btn"
                      onClick={() => onRemoveBook(book._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {!addAddress && (
            <div className="placeorder-cart">
              <div
                className={classes["order-btn-cart"]}
                onClick={toggleAddress}
              >
                Place order
              </div>
            </div>
          )}
        </div>

        {!addAddress && (
          <div className="second-div" onClick={toggleAddress}>
            <div className="address-cart change-display-left">
              Address Details
            </div>
          </div>
        )}
        {addAddress && (
          <Customerdetails
            setShowSummary={setShowSummary}
            showSummary={showSummary}
          />
        )}

        {!showSummary && (
          <div className="third-div">
            <div className="ordersummary-cart change-display-left">
              Order Summary
            </div>
          </div>
        )}

        {showSummary && <Ordersummary books={bookArray} cart={cartDetails} />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;

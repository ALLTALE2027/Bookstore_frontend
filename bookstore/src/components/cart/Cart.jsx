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

const Cart = () => {
  const [addAddress, setAddAddress] = useState(false);
  const toggleAddress = () => {
    setAddAddress(true);
  };
  const [bookArray, setBookArray] = useState([]);

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
          <div className="allCartBooks">
            {bookArray.map((book) => (
              <div key={book._id}>
                <div className="book-details-cart">
                  <div className="change-display-left">
                    <img src={cartBook} alt="cart book" />
                  </div>
                  <div className="book-details">
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
                <div className="quantity-buttons">
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
          <div className="placeorder-cart">
            <div className="order-btn-cart">Place order</div>
          </div>
        </div>

        {!addAddress && (
          <div className="second-div" onClick={toggleAddress}>
            <div className="address-cart change-display-left">
              Address Details
            </div>
          </div>
        )}
        {addAddress && <Customerdetails />}
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

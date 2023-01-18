import React, { useState, useEffect } from "react";
import {
  getWishlistDetailsAPI,
  removeFromCartAPI,
  removeFromWishlistAPI,
} from "../../services/cartservices";
import Header from "../Header/Header";
import cartBook from "./mini-book-cart.png";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import "./wishlist.css";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Footer from "../Footer/Footer";

const useStyle = makeStyles({
  "Wishlist-book-details": {
    display: "flex",
    flexDirection: "column",
    width: "40%",
  },
  "book-details-Wishlist": {
    display: "flex",
    gap: "5%",
    paddingBottom: "2%",
    marginLeft: "5%",
    marginTop: "2%",
    width: "50%",
  },
  "incart-price": {
    fontSize: "1rem",
    textAlign: "left",
  },
  ["@media only screen and (min-width:481px) and (max-width:768px)"]: {
    "Wishlist-book-details": {
      width: "50%",
    },
    "book-details-Wishlist": {
      width: "70%",
    },
  },
  ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
    "Wishlist-book-details": {
      width: "55%",
    },
    "book-details-Wishlist": {
      width: "77%",
    },
    "incart-price": {
      fontSize: "0.8rem",
    },
  },
});

const Wishlist = () => {
  const classes = useStyle();
  const [bookWishlisted, setBookWishlisted] = useState([]);
  const navigate = useNavigate();
  const getWishlist = async () => {
    let response = await getWishlistDetailsAPI();
    console.log("Wishlisted", response);
    setBookWishlisted(response.data.data.books);
  };

  const removeFromWishlist = async (id) => {
    await removeFromWishlistAPI(id);
    getWishlist();
  };
  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <>
      <Header />
      <div className="cart-header">
        <span className="home-route" onClick={() => navigate("/Home")}>
          Home/{" "}
        </span>
        <span>My Wishlist</span>
      </div>
      <div className="main-container-Wishlist">
        <div className="Wishlist-book-count">
          {" "}
          <span className="Wishlist-count-label">My Wishlist (02)</span>
        </div>
        <div className="All-Wishlist-books">
          {bookWishlisted.map((book) => (
            <div key={book._id} className="Wishlist-single-div">
              <div className={classes["book-details-Wishlist"]}>
                <div className="change-display-left">
                  <img src={cartBook} alt="cart book" />
                </div>
                <div className={classes["Wishlist-book-details"]}>
                  <div className="book-name-cart">{book.bookName}</div>
                  <div className="incart-author"> by {book.author}</div>
                  <div className={classes["incart-price"]}>
                    <span className={classes["incart-price"]}>Rs.1500 </span>
                    <span className="priceBox1-display incart-discount">
                      Rs.{book.price}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="delete-icon-Wishlist"
                onClick={() => {
                  removeFromWishlist(book._id);
                }}
              >
                <DeleteForeverOutlinedIcon sx={{ color: "grey" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;

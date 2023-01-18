import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SmallBookImage from "./mini-book.png";
import SmallBookImage2 from "./mini-book-2.png";
import BookImage from "./book.png";
import "./Bookview.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { height, margin } from "@mui/system";
import profilepic from "./profilePic.jpg";
import Header from "../Header/Header";
import {
  addToCartAPI,
  addToWishlistAPI,
  getWishlistDetailsAPI,
} from "../../services/cartservices";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  "Book-main-container": {
    display: "flex",
    width: "88%",
    marginLeft: "6%",
    marginTop: "7%",
  },
  "Big-Image-container": {
    display: "flex",
    flexDirection: "column",
    width: "20% !important",
  },
  "srcoll-position": {
    position: "sticky",
    top: "130px",
  },
  "book-details-main": {
    display: "flex",
    flexDirection: "column",
    width: "77%",
  },
  "book-name-class-display": {
    display: "flex",
    padding: "0",
    paddingLeft: "10%",
    paddingTop: "2%",
    fontSize: "25px",
    fontFamily: [
      "Trebuchet MS",
      "Lucida Sans Unicode",
      "Lucida Grande",
      "Lucida Sans",
      "Arial",
      "sans-serif",
    ],
    whiteSpace: "nowrap",
    alignItems: "center",
  },
  "book-author-class-display": {
    fontSize: "18px",
    color: "#878787",
    fontFamily: "sans-serif",
  },

  "book-bullet-class-display": {
    fontSize: "14px",
    color: "#878787",
    fontFamily: "sans-serif",
  },
  "text-class": {
    fontSize: "0.9rem",
    color: "#484646",
    fontFamily: "sans-serif",
    width: "auto",
    whiteSpace: "normal",
    textAlign: "start",
  },
  feedback: {
    fontSize: "20px",
    color: "black",
    fontFamily: "sans-serif",
  },
  "feedback-class": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#f5f5f5",
    padding: "0px",
    marginLeft: "8%",
    marginTop: "1%",
    padding: "1% 1%",
  },
  "Bookview-header": {
    position: "absolute",
    top: "15%",
    marginLeft: "6%",
  },
  "greenBox-display": {
    color: "white",
    backgroundColor: "#388e3c",
    width: "8% !important",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: "2px",
    fontFamily: "sans-serif",
    fontSize: "1.2rem",
  },
  "mini-books": {
    display: "flex",
    flexDirection: "column",
  },

  "card-container": {
    display: "flex !important",
    alignItems: "flex-start !important",
    width: "100%",
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    "Book-main-container": {
      flexDirection: "column",
      marginTop: "10%",
    },
    "Big-Image-container": {
      width: "70% !important",
    },
    "srcoll-position": {
      position: "static",
    },
    "book-name-class-display": {
      paddingLeft: "0px",
    },
    "Bookview-header": {
      top: "10%",
    },
    "greenBox-display": {
      width: "26% !important",
    },
    "mini-books": {
      flexDirection: "row",
    },
  },
  ["@media only screen and (min-width: 481px) and (max-width: 768px)"]: {
    "Big-Image-container": {
      width: "60% !important",
    },
    "book-details-main": {
      width: "60%",
    },
    "Book-main-container": {
      flexDirection: "column",
      marginTop: "10%",
      alignItems: "center",
    },
    "srcoll-position": {
      position: "static",
    },
    "book-name-class-display": {
      paddingLeft: "0px",
    },
    "Bookview-header": {
      top: "12%",
    },
    "greenBox-display": {
      width: "25% !important",
    },
    "mini-books": {
      flexDirection: "row",
    },
    "card-container": {
      justifyContent: "center",
    },
  },
  ["@media only screen and (min-width: 769px) and (max-width: 1024px)"]: {
    "Big-Image-container": {
      width: "25% !important",
    },
    "greenBox-display": {
      width: "14% !important",
    },
  },
});

const Bookview = ({ book }) => {
  const classes = useStyle();
  const [buttonToggle, setButtonToggle] = useState(false);
  // const [wishlistedBooks, setWishlistedBooks] = useState([]);
  const [wishlisted, setWishlisted] = useState("");
  const navigate = useNavigate();

  const addtoCartCall = async (id) => {
    await addToCartAPI(id);
    setButtonToggle(true);
  };

  const addToWishlist = async (id) => {
    await addToWishlistAPI(id);
    setWishlisted("red");
  };

  const getWishlistBooks = async () => {
    let response = await getWishlistDetailsAPI();
    const wishlistedBook = response.data.data.books.filter(
      (wish) => wish._id == book._id
    );

    if (wishlistedBook.length !== 0) {
      setWishlisted("red");
    }
  };

  useEffect(() => {
    getWishlistBooks();
  }, []);

  return (
    <>
      <Header />
      <div className={classes["Bookview-header"]}>
        <span onClick={() => navigate("/Home")}>Home/</span>
        <span>Book(01) </span>
      </div>
      <Box className={classes["Book-main-container"]}>
        <Box className={classes["mini-books"]}>
          <Box className="Box-Image">
            <img src={SmallBookImage} alt="Book" />
          </Box>
          <Box className="Box-Image" style={{ borderColor: "#D1D1D1" }}>
            <img src={SmallBookImage2} alt="Book" />
          </Box>
        </Box>
        <Box
          className={`${classes["Big-Image-container"]} ${classes["srcoll-position"]} `}
        >
          <Card className={classes["card-container"]}>
            <CardContent className="img-content">
              <img src={BookImage} alt="Book" className="img-size" />
            </CardContent>
          </Card>

          <Box className="button-class">
            {!buttonToggle && (
              <Button
                variant="contained"
                className="buttons"
                onClick={() => addtoCartCall(book._id)}
              >
                Add To Cart
              </Button>
            )}
            {buttonToggle && (
              <div className="btnsAndcount-bookview">
                <button className="quantity-button-bookview">-</button>
                <span className="book-count-bookview">{book.quantity}</span>
                <button className="quantity-button-bookview">+</button>
              </div>
            )}
            <Button
              variant="contained"
              className="buttons button2"
              onClick={() => {
                addToWishlist(book._id);
              }}
            >
              <FavoriteIcon
                className="favButton"
                sx={{ color: `${wishlisted}` }}
              />
              {wishlisted == "" ? "Wishlist" : "Added"}
            </Button>
          </Box>
        </Box>
        <Box className={classes["book-details-main"]}>
          <Box className={classes["book-name-class-display"]}>
            {book.bookName}
            {/* Don't Make Me Think */}
          </Box>
          <Box
            className={`${classes["book-author-class-display"]} ${classes["book-name-class-display"]}`}
          >
            By {book.author}
            {/* By Steve Krug */}
          </Box>

          <Box className={classes["book-name-class-display"]}>
            <Box className={classes["greenBox-display"]}>
              4.2 <StarBorderIcon fontSize="1rem" />
            </Box>
            <span className="ratingCount-display">(15)</span>
          </Box>
          <Box className={classes["book-name-class-display"]}>
            <span>Rs. {book.discountPrice} </span>
            <span className="priceBox1-display">Rs. {book.price}</span>
            {/* <span>Rs. 1500 </span>
          <span className="priceBox1-display">Rs. 2000</span> */}
          </Box>
          <hr className="hr-class" />
          <Box
            className={`${classes["book-name-class-display"]} ${classes["book-bullet-class-display"]}`}
          >
            <RadioButtonUncheckedIcon className="bullet" />
            Book detail
          </Box>
          <p
            className={`${classes["book-name-class-display"]} ${classes["text-class"]}`}
          >
            Since Don’t Make Me Think was first published in 2000, hundreds of
            thousands of Web designers and developers have relied on usability
            guru Steve Krug’s guide to help them understand the principles of
            intuitive navigation and information design. Witty, commonsensical,
            and eminently practical, it’s one of the best-loved and most
            recommended books on the subject. Now Steve returns with fresh
            perspective to reexamine the principles that made Don’t Make Me
            Think a classic–with updated examples and a new chapter on mobile
            usability. And it’s still short, profusely illustrated…and best of
            all–fun to read. If you’ve read it before, you’ll rediscover what
            made Don’t Make Me Think so essential to Web designers and
            developers around the world. If you’ve never read it, you’ll see why
            so many people have said it should be required reading for anyone
            working on Web sites.
          </p>
          <hr className="hr-class" />
          <Box
            className={`${classes["book-name-class-display"]} ${classes.feedback}`}
          >
            Customer Feedback
          </Box>
          <Box
            className={`${classes["book-name-class-display"]} ${classes["feedback-class"]}`}
          >
            <span className="overall-ratring">Overall rating</span>
            <Box>
              <StarBorderPurple500OutlinedIcon />
              <StarBorderPurple500OutlinedIcon />
              <StarBorderPurple500OutlinedIcon />
              <StarBorderPurple500OutlinedIcon />
              <StarBorderPurple500OutlinedIcon />
            </Box>
            <textarea
              placeholder="write your review here"
              rows="4"
              cols="50"
              style={{ width: "99%", padding: "0" }}
            ></textarea>
            <Box
              display="flex"
              justifyContent="flex-end"
              width="100%"
              paddingTop="1%"
            >
              <Button
                variant="contained"
                className="buttons"
                sx={{ width: "10%" }}
              >
                Submit
              </Button>
            </Box>
          </Box>

          <Box
            className={classes["book-name-class-display"]}
            display="flex"
            alignItems="center"
          >
            <img
              src={profilepic}
              alt="profilePic"
              style={{ borderRadius: "50%", height: "80%" }}
            />
            <span style={{ fontSize: "60%", marginLeft: "1%" }}>
              Darshan Deshmukh
            </span>
          </Box>
          <Box className={classes["book-name-class-display"]}>
            <StarOutlinedIcon sx={{ color: "gold" }} />
            <StarOutlinedIcon sx={{ color: "gold" }} />
            <StarOutlinedIcon sx={{ color: "gold" }} />
            <StarOutlinedIcon sx={{ color: "gold" }} />
            <StarOutlinedIcon sx={{ color: "grey" }} />
          </Box>
          <Box
            className={`${classes["book-name-class-display"]} ${classes["text-class"]}`}
          >
            <span>
              Good Book, Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Neque tempore sequi ullam iusto obcaecati dignissimos
              nesciunt totam doloremque. Ut ipsam, nihil modi quis asperiores
              voluptas quo blanditiis exercitationem nam minima.
            </span>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Bookview;

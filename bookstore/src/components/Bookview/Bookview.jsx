import React from "react";
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

const Bookview = ({ book }) => {
  return (
    <>
      <Header />
      <div className="Bookview-header">
        <span>Home/Book(01) </span>
      </div>
      <Box className="Book-main-container">
        <Box className="mini-books">
          <Box className="Box-Image">
            <img src={SmallBookImage} alt="Book" />
          </Box>
          <Box className="Box-Image" style={{ borderColor: "#D1D1D1" }}>
            <img src={SmallBookImage2} alt="Book" />
          </Box>
        </Box>
        <Box className="Big-Image-container srcoll-position">
          <Card className="card-container">
            <CardContent className="img-content">
              <img src={BookImage} alt="Book" className="img-size" />
            </CardContent>
          </Card>

          <Box className="button-class">
            <Button variant="contained" className="buttons">
              Add To Bag
            </Button>
            <Button variant="contained" className="buttons button2">
              <FavoriteIcon className="favButton" />
              Wishlist
            </Button>
          </Box>
        </Box>
        <Box className="book-details-main">
          <Box className="book-name-class-display">
            {book.bookName}
            {/* Don't Make Me Think */}
          </Box>
          <Box className="book-name-class-display book-author-class-display">
            By {book.author}
            {/* By Steve Krug */}
          </Box>

          <Box className="book-name-class-display book-ratingBox-display">
            <Box className="greenBox review-bookview">
              4.2 <StarBorderIcon fontSize="1rem" />
            </Box>
            <span className="ratingCount-display">(15)</span>
          </Box>
          <Box className="book-name-class-display priceBox-display">
            <span>Rs. {book.discountPrice} </span>
            <span className="priceBox1-display">Rs. {book.price}</span>
            {/* <span>Rs. 1500 </span>
          <span className="priceBox1-display">Rs. 2000</span> */}
          </Box>
          <hr className="hr-class" />
          <Box className="book-name-class-display book-bullet-class-display">
            <RadioButtonUncheckedIcon className="bullet" />
            Book detail
          </Box>
          <p className="book-name-class-display text-class">
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
          <Box className="book-name-class-display feedback">
            Customer Feedback
          </Box>
          <Box className="book-name-class-display feedback-class">
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
            className="book-name-class-display"
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
          <Box className="book-name-class-display">
            <StarOutlinedIcon sx={{ color: "gold" }} />
            <StarOutlinedIcon sx={{ color: "gold" }} />
            <StarOutlinedIcon sx={{ color: "gold" }} />
            <StarOutlinedIcon sx={{ color: "gold" }} />
            <StarOutlinedIcon sx={{ color: "grey" }} />
          </Box>
          <Box className="book-name-class-display text-class">
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

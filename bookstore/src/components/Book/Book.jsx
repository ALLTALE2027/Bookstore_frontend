import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Book.css";
import BookImage from "./bookimage.png";
import { fontSize } from "@mui/system";
import Star from "@mui/icons-material/StarBorderPurple500Sharp";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  bookNameClass: {
    display: "flex",
    alignItems: "flex-start",
    padding: "0",
    paddingTop: "4%",
    paddingLeft: "18%",
    fontSize: "0.9rem",
    fontFamily: [
      "Franklin Gothic Medium",
      "Arial Narrow",
      "Arial",
      "sans-serif",
    ],
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    bookNameClass: {
      fontSize: "0.75rem",
    },
  },
});

function Books({ book, bookView }) {
  const classes = useStyle();
  return (
    <Card className="mainContainer-card">
      <CardContent className="contentClass">
        <Box className="BookBox">
          <img
            src={BookImage}
            alt="Book not found"
            className="book-image"
            onClick={() => bookView(book)}
          />
        </Box>
        <Box className={classes.bookNameClass}>{book.bookName}</Box>
        <Box className="book-name-class book-author-class">{book.author}</Box>
        <Box className="book-name-class book ratingBox">
          <Box className="greenBox">
            4.5 <Star fontSize="1rem" className="star-symbol" />
          </Box>
          <span className="ratingCount">(20)</span>
        </Box>
        <Box className="book-name-class priceBox">
          <span>Rs. {book.discountPrice} </span>
          <span className="priceBox1">Rs. {book.price}</span>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Books;

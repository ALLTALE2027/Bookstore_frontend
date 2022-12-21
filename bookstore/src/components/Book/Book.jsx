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

function Books({ book, bookView }) {
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
        <Box className="book-name-class">{book.bookName}</Box>
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

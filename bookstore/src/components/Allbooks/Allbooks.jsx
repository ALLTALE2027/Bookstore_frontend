import React, { useEffect, useState } from "react";
import "./allbooks.css";
import Book from "../Book/Book";
import { GetAllBooks } from "../../services/userservices";

const Allbooks = ({ bookView }) => {
  const [getBooks, setGetBooks] = useState([]);
  const getAllBooks = async () => {
    try {
      let response = await GetAllBooks();
      setGetBooks(response.data.data);
    } catch (error) {
      console.log("failed to get all books", error);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <>
      <div className="display-all-books">
        {getBooks.map((book) => (
          <Book key={book._id} book={book} bookView={bookView} />
        ))}
      </div>
    </>
  );
};

export default Allbooks;

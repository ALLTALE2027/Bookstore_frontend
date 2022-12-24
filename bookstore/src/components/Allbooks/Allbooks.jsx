import React, { useEffect, useState } from "react";
import "./allbooks.css";
import Book from "../Book/Book";
import { GetAllBooks } from "../../services/userservices";
import { paginate } from "../Paging/PagingLogic";
import Paging from "../Paging/Paging";

const Allbooks = ({ bookView }) => {
  let pageSize = 4;
  const [getBooks, setGetBooks] = useState([]);
  const getAllBooks = async () => {
    let response = await GetAllBooks();
    setGetBooks(response.data.data);
  };

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    getAllBooks();
  }, []);
  const books = paginate(getBooks, page, pageSize);

  return (
    <>
      <div className="display-all-books">
        {books.map((book) => (
          <Book key={book._id} book={book} bookView={bookView} />
        ))}
      </div>
      <Paging
        itemsCount={getBooks.length}
        pageSize={pageSize}
        handleChange={handleChange}
      />
    </>
  );
};

export default Allbooks;

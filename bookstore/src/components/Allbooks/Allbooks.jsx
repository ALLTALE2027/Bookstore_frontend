import React, { useEffect, useState } from "react";
import "./allbooks.css";
import Book from "../Book/Book";
import { GetAllBooks } from "../../services/userservices";
import { paginate } from "../Paging/PagingLogic";
import Paging from "../Paging/Paging";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  displayAllBooks: {
    display: "grid",
    width: "88%",
    marginTop: "7%",
    marginLeft: "6%",
    gridTemplateColumns: "repeat(auto-fill, 20%)",
    justifyContent: "space-between",
    gridGap: "1%",
  },
  ["@media only screen and (min-width: 481px) and (max-width: 768px)"]: {
    displayAllBooks: {
      display: "grid",
      width: "88%",
      marginTop: "10%",
      marginLeft: "6%",
      gridTemplateColumns: "repeat(auto-fill, 45%)",
      gridGap: "3%",
    },
  },
  ["@media only screen and (min-width: 769px) and (max-width: 1024px)"]: {
    displayAllBooks: {
      display: "grid",
      width: "85%",
      marginTop: "10%",
      marginLeft: "6%",
      gridTemplateColumns: "repeat(auto-fill, 25%)",
      gridGap: "2%",
    },
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    displayAllBooks: {
      width: "80%",
      gridTemplateColumns: "repeat(auto-fill, 70%)",
      gridGap: "1%",
      marginTop: "10%",
      justifyContent: "center",
    },
  },
});

const Allbooks = ({ bookView, searchInput, showSearch }) => {
  const classes = useStyle();

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

  const searchedBook = getBooks.filter((search) =>
    search.bookName.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div>
        <div className={classes.displayAllBooks}>
          {!showSearch &&
            books.map((book) => (
              <Book key={book._id} book={book} bookView={bookView} />
            ))}
          {showSearch &&
            searchedBook.length !== 0 &&
            searchedBook.map((book) => <Book book={book} />)}
        </div>
        <Paging
          itemsCount={getBooks.length}
          pageSize={pageSize}
          handleChange={handleChange}
        />
      </div>
    </>
  );
};

export default Allbooks;

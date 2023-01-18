import React, { useState } from "react";
import Header from "../Header/Header";
import "./Dashboard.css";
import Allbooks from "../Allbooks/Allbooks";
import Bookview from "../Bookview/Bookview";
import { makeStyles } from "@mui/styles";
import Footer from "../Footer/Footer";

const useStyle = makeStyles({
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: "85px",
    width: "100%",
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    mainContainer: {
      top: "58px",
      width: "87%",
      justifyContent: "centre",
    },
  },
  ["@media only screen and (min-width: 481px) and (max-width: 899px)"]: {
    mainContainer: {
      top: "70px",
    },
  },
});

function Dashboard() {
  const classes = useStyle();
  const [viewBook, setViewBook] = useState(false);
  const [selectedBook, setSelectedBook] = useState("hello");

  const bookView = (book) => {
    setSelectedBook(book);
    setViewBook(true);
  };
  const [searchInput, setSearchInput] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  if (viewBook) {
    return <Bookview book={selectedBook} />;
  }
  return (
    <>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setShowSearch={setShowSearch}
      />
      <div className={classes.mainContainer}>
        <div className="change-display change-display-left">
          <span className="Books">Books </span>
          <span className="book-count">(128 items)</span>
        </div>
        <div className="change-display change-display-right">
          <select className="sort-by">
            <option value="volvo">Sort by relevance</option>
          </select>
        </div>
      </div>
      <Allbooks
        bookView={bookView}
        searchInput={searchInput}
        showSearch={showSearch}
      />
      <Footer />
    </>
  );
}

export default Dashboard;

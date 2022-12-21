import React, { useState } from "react";
import Header from "../Header/Header";
import "./Dashboard.css";
import Allbooks from "../Allbooks/Allbooks";
import Bookview from "../Bookview/Bookview";

function Dashboard() {
  const [viewBook, setViewBook] = useState(false);
  const [selectedBook, setSelectedBook] = useState("hello");

  const bookView = (book) => {
    setSelectedBook(book);
    setViewBook(true);
  };

  if (viewBook) {
    return <Bookview book={selectedBook} />;
  }
  return (
    <>
      <Header />
      <div className="main-container">
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
      <Allbooks bookView={bookView} />
    </>
  );
}

export default Dashboard;

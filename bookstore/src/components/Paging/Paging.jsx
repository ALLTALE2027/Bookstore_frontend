import React from "react";
import Pagination from "@mui/material/Pagination";
import "./paging.css";

const Paging = ({ itemsCount, pageSize, handleChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount == 1) return null;
  return (
    <div className="main-container-pagination">
      <Pagination
        count={pagesCount}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
};

export default Paging;

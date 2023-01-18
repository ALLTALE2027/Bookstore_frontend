import React from "react";
import Pagination from "@mui/material/Pagination";
import "./paging.css";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  "main-container-pagination": {
    display: "flex",
    justifyContent: "center",
    marginTop: "5%",
    marginLeft: "6%",
  },
  ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
    "main-container-pagination": {
      width: "80%",
    },
  },
});

const Paging = ({ itemsCount, pageSize, handleChange }) => {
  const classes = useStyle();
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount == 1) return null;
  return (
    <div className={classes["main-container-pagination"]}>
      <Pagination
        count={pagesCount}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        className="nav-element-inside-Pagination"
      />
    </div>
  );
};

export default Paging;

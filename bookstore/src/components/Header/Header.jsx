import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import educationlogo from "./bookLogo.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  BoxOuter: {
    position: "sticky",
    top: "0",
    zIndex: "100",
  },

  SearchBox: {
    position: "absolute",
    marginLeft: "25%",
    width: "40%",
    backgroundColor: "white",
    borderRadius: "6px",
  },
  typoClass: {
    position: "absolute",
    marginLeft: "9%!important",
  },
  cartLogoDiv: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    width: "13%",
    marginLeft: "80%",
  },
  iconBox1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "small",
  },

  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    cartLogoDiv: {
      marginLeft: "65%",
    },
    iconBox1: {
      margin: "0px 3%",
    },
    BoxOuter: {
      width: "90%",
    },
  },
  ["@media only screen and (min-width: 481px) and (max-width: 899px)"]: {
    SearchBox: {
      marginLeft: "30%",
    },
    typoClass: {
      marginLeft: "12%!important",
    },
    iconBox1: {
      margin: "0px 3%",
    },
    cartLogoDiv: {
      marginLeft: "77%",
    },
  },
  ["@media only screen and (min-width: 900px) and (max-width: 1175px)"]: {
    typoClass: {
      marginLeft: "10%!important",
    },
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "grey",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
      // background:'white'
      color: "grey",
    },
  },
}));
function Header({ searchInput, setSearchInput, setShowSearch }) {
  const classes = useStyle();
  let navigate = useNavigate();
  const onChange = (event) => {
    setSearchInput(event.target.value);
    if (event.target.value !== "") {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }} className={classes.BoxOuter}>
      <AppBar
        position="static"
        sx={{ background: "#A03037", padding: "0" }}
        className="Appbarclass"
      >
        <Toolbar className="ToolBarClass">
          <Box className="ImageClass">
            <img src={educationlogo} alt="logo" className="ImageClass" />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, marginLeft: "10%" }}
            className={classes.typoClass}
          >
            Bookstore
          </Typography>
          <Box className={classes.SearchBox}>
            <Search className="SearchBox1">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Enter the book name here to search"
                inputProps={{ "aria-label": "search" }}
                className="SearchBox1"
                name="searchValue"
                value={searchInput}
                onChange={onChange}
              />
            </Search>
          </Box>
          <Box className={classes.cartLogoDiv}>
            <div className={classes.iconBox1}>
              <Person2OutlinedIcon />
              <span>Profile</span>
            </div>
            <div
              className={classes.iconBox1}
              onClick={() => {
                navigate("/wishlist");
              }}
            >
              <FavoriteIcon />
              <span>Wishlist</span>
            </div>
            <div
              className={classes.iconBox1}
              onClick={() => {
                navigate("/cart");
              }}
            >
              <AddShoppingCartOutlinedIcon />
              <span>Cart</span>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

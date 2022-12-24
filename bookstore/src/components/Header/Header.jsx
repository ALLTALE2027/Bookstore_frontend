import React from "react";
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
function Header() {
  let navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }} className="BoxOuter">
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
            className="typoClass"
          >
            Bookstore
          </Typography>
          <Box className="SearchBox">
            <Search className="SearchBox1">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                className="SearchBox1"
              />
            </Search>
          </Box>
          <Box className="cartLogoDiv">
            <div className="iconBox1">
              <Person2OutlinedIcon />
              <span>Profile</span>
            </div>
            <div
              className="iconBox1"
              onClick={() => {
                navigate("/wishlist");
              }}
            >
              <FavoriteIcon />
              <span>Wishlist</span>
            </div>
            <div
              className="iconBox1"
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

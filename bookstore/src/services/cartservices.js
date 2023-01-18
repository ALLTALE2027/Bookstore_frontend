import axios from "axios";
const headerConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("bookstoreToken")}`,
  },
};

export const addToCartAPI = (bookid) => {
  let response = axios.post(
    `http://localhost:3000/api/v1/cart/add/${bookid}`,
    {},
    headerConfig
  );
  return response;
};

export const getCartDetailsAPI = () => {
  let response = axios.get(
    "http://localhost:3000/api/v1/cart/getcart",
    headerConfig
  );
  return response;
};

export const removeFromCartAPI = (bookid) => {
  let response = axios.post(
    `http://localhost:3000/api/v1/cart/remove/${bookid}`,
    {},
    headerConfig
  );
  return response;
};

export const deleteFromCartAPI = (bookid) => {
  let response = axios.post(
    `http://localhost:3000/api/v1/cart/delete/${bookid}`,
    {},
    headerConfig
  );
  return response;
};

export const getWishlistDetailsAPI = () => {
  let response = axios.get(
    "http://localhost:3000/api/v1/wishlist",
    headerConfig
  );
  return response;
};

export const addToWishlistAPI = (bookid) => {
  let response = axios.post(
    `http://localhost:3000/api/v1/wishlist/add/${bookid}`,
    {},
    headerConfig
  );
  return response;
};

export const removeFromWishlistAPI = (bookid) => {
  let response = axios.post(
    `http://localhost:3000/api/v1/wishlist/remove/${bookid}`,
    {},
    headerConfig
  );
  return response;
};

export const addAddressAPI = (addressDetails) => {
  let response = axios.post(
    `http://localhost:3000/api/v1/address`,
    addressDetails,
    headerConfig
  );
  return response;
};

export const checkoutCart = (cartId) => {
  let response = axios.post(
    `http://localhost:3000/api/v1/cart/purchase/${cartId}`,
    {},
    headerConfig
  );
  return response;
};

import axios from "axios";
const headerConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("bookstoreToken")}`,
  },
};

export const addToCartAPI = (bookid) => {
  try {
    let response = axios.post(
      `http://localhost:3000/api/v1/cart/add/${bookid}`,
      {},
      headerConfig
    );
    return response;
  } catch (error) {
    console.log("add to cart error", error);
  }
};

export const getCartDetailsAPI = () => {
  let response = axios.get(
    "http://localhost:3000/api/v1/cart/getcart",
    headerConfig
  );
  return response;
};

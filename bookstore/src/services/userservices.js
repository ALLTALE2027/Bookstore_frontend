import axios from "axios";
const headerConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("bookstoreToken")}`,
  },
};

export const SignupApi = (userdata) => {
  let response = axios.post("http://localhost:3000/api/v1/users", userdata);
  return response;
};

export const SigninApi = (login) => {
  let response = axios.post("http://localhost:3000/api/v1/users/login", login);
  return response;
};

export const GetAllBooks = () => {
  let response = axios.get("http://localhost:3000/api/v1/books", headerConfig);
  return response;
};

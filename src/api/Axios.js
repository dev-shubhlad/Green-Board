import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const setAuthToken = (token) => {
  if (token) {
    //applying token
    api.defaults.headers.common["Authorization"] = token;
  } else {
    //deleting the token from header
    delete api.defaults.headers.common["Authorization"];
  }
};

export { api, setAuthToken };

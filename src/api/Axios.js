import axios from "axios";
import { fetchAccessToken } from "../redux/actions/AuthAction";
import store from "../redux/store/store";

// let isAlreadyFetchingAccessToken = false;
// let subscribers = [];

// function onAccessTokenFetched(access_token) {
//   subscribers = subscribers.filter((callback) => callback(access_token));
// }

// function addSubscriber(callback) {
//   subscribers.push(callback);
// }

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const { config, response } = error;
    if (response && response.status === 401) {
      localStorage.removeItem("AuthToken");
      localStorage.removeItem("RefToken");
    }
    throw new Error(response.data.message);
  }
);

//   function (error) {
// api.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     const { config, response } = error;
//     const originalRequest = config;

//     if (response && response.status === 401) {
//       console.log("Inside refreshing");
//       if (!isAlreadyFetchingAccessToken) {
//         try {
//           isAlreadyFetchingAccessToken = true;
//           console.log("Dispatching fetchAccess");
//           store.dispatch(fetchAccessToken()).then((access_token) => {
//             console.log("After Dispatch");
//             isAlreadyFetchingAccessToken = false;
//             onAccessTokenFetched(access_token);
//           });
//         } catch (error) {
//           console.log("Failed");
//           return Promise.reject(error);
//         }
//       }

//       const retryOriginalRequest = new Promise((resolve) => {
//         addSubscriber((access_token) => {
//           resolve(api(originalRequest));
//         });
//       });
//       return retryOriginalRequest;
//     }
//   }
// );

const setAuthToken = (token) => {
  if (token) {
    //applying token
    console.log("Setting Authorization");
    api.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    //deleting the token from header
    console.log("Removing Authorization");
    delete api.defaults.headers.common["Authorization"];
  }
};

if (localStorage.getItem("AuthToken")) {
  let tokenFromStorage = JSON.parse(localStorage.getItem("AuthToken")).token;
  console.log("tokenFromStorage ", tokenFromStorage);
  setAuthToken(tokenFromStorage);
}

export { api, setAuthToken };

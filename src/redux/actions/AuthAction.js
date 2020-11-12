import { PostAdd } from "@material-ui/icons";
import { api, setAuthToken } from "../../api/Axios";
import * as authConst from "../constants/AuthConstant";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: authConst.LOGIN_REQUEST });

    const { data } = await api.post("/v1/institute/login", { email, password });

    dispatch({
      type: authConst.LOGIN_SUCCESS,
      payload: data.data.tokens.access,
    });

    setAuthToken(data.data.tokens.access.token);

    localStorage.setItem("AuthToken", JSON.stringify(data.data.tokens.access));
    localStorage.setItem("RefToken", JSON.stringify(data.data.tokens.refresh));
  } catch (error) {
    dispatch({
      type: authConst.LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchAccessToken = () => async (dispatch) => {
  console.log("Inside fetchAccessToken");
  return new Promise(function (resolve, reject) {
    console.log("Sending refresh request");
    fetch(
      "https://greenbord-backend.herokuapp.com/v1/institute/generateNewToken",
      {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("RefToken"),
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("status", data);
        if (data.code === 401) {
          console.log("Got error clearing data");
          dispatch({ type: authConst.USER_LOGOUT });
          localStorage.removeItem("AuthToken");
          localStorage.removeItem("RefToken");
          reject(data);
        } else {
          console.log("Succefully got the data");
          console.log(data.data.tokens);
          localStorage.setItem(
            "AuthToken",
            JSON.stringify(data.data.tokens.access)
          );
          localStorage.setItem(
            "RefToken",
            JSON.stringify(data.data.tokens.refresh)
          );
          setAuthToken(data.data.tokens.access.token);
          resolve(data.data.tokens.access.token);
        }
      })
      .catch((err) => {
        console.log("Got error clearing data");
        dispatch({ type: authConst.USER_LOGOUT });
        localStorage.removeItem("AuthToken");
        localStorage.removeItem("RefToken");
        reject(err);
      });
  });
};

export const register = (instituteData) => async (dispatch) => {
  try {
    dispatch({ type: authConst.LOGIN_REQUEST });

    const { data } = await api.post("/v1/institute/signup", instituteData);

    dispatch({
      type: authConst.LOGIN_SUCCESS,
      payload: data.data.tokens.access,
    });

    setAuthToken(data.data.tokens.access.token);

    localStorage.setItem("AuthToken", JSON.stringify(data.data.tokens.access));
    localStorage.setItem("RefToken", JSON.stringify(data.data.tokens.refresh));
  } catch (error) {
    dispatch({
      type: authConst.LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

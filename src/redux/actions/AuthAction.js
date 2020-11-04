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

    setAuthToken();

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

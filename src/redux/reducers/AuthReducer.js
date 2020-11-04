import * as authConst from "../constants/AuthConstant";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case authConst.LOGIN_REQUEST:
      return { loading: true };
    case authConst.LOGIN_SUCCESS:
      return { loading: false, userToken: action.payload };
    case authConst.LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case authConst.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

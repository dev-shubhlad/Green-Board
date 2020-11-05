import * as ProfileConst from "../constants/ProfileConstant";

export const EmployeeProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case ProfileConst.EMPLOYEE_PROFILE_REQUEST:
      return { loading: true };
    case ProfileConst.EMPLOYEE_PROFILE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case ProfileConst.EMPLOYEE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const InstituteProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case ProfileConst.INSTITUTE_PROFILE_REQUEST:
      return { loading: true };
    case ProfileConst.INSTITUTE_PROFILE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case ProfileConst.INSTITUTE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

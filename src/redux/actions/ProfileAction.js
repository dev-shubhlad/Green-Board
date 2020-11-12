import { api } from "../../api/Axios";
import * as ProfileConst from "../constants/ProfileConstant";

export const getInstituteDetails = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ProfileConst.INSTITUTE_PROFILE_REQUEST });

    const { data } = await api.get(
      "/v1/institute/profile?profileType=institute"
    );

    console.log("Institute Data : ", data.data);

    dispatch({
      type: ProfileConst.INSTITUTE_PROFILE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: ProfileConst.INSTITUTE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getEmployeeDetails = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ProfileConst.EMPLOYEE_PROFILE_REQUEST });

    const { data } = await api.get(
      "/v1/institute/profile?profileType=employee"
    );

    console.log(data);

    dispatch({
      type: ProfileConst.EMPLOYEE_PROFILE_SUCCESS,
      payload: data.data.employee,
    });
  } catch (error) {
    dispatch({
      type: ProfileConst.EMPLOYEE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile = (
  name,
  email,
  setPopup,
  setLoading,
  notifySuccess,
  notifyError
) => async (dispatch) => {
  try {
    setLoading(true);
    const { data } = await api.put(
      "/v1/institute/profile?profileType=employee",
      {
        name,
        email,
      }
    );
    console.log("updated data: ", data.data.employee);
    setLoading(false);
    setPopup(false);
    notifySuccess(data.message);
    dispatch({
      type: ProfileConst.EMPLOYEE_UPDATE_SUCCESS,
      payload: data.data.employee,
    });
  } catch (error) {
    // notifyError(
    //   error.response && error.response.data.message
    //     ? error.response.data.message
    //     : error.message
    // );
    dispatch({
      type: ProfileConst.INSTITUTE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateInstituteProfile = (
  instituteData,
  setPopup,
  setLoading,
  notifySuccess,
  notifyError
) => async (dispatch) => {
  try {
    setLoading(true);
    console.log("instituteData", instituteData);
    const { data } = await api.put(
      "/v1/institute/profile?profileType=institute",
      instituteData
    );
    console.log("Data institute", data.data);
    setLoading(false);
    setPopup(false);
    notifySuccess(data.message);
    dispatch({
      type: ProfileConst.INSTITUTE_UPDATE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    notifySuccess(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
    dispatch({
      type: ProfileConst.INSTITUTE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

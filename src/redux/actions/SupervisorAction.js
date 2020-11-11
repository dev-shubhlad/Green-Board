import { api } from "../../api/Axios";
import * as SupervisorListConst from "../constants/ListConstants";

export const fetchSupervisorList = () => async (dispatch) => {
  try {
    dispatch({ type: SupervisorListConst.SUPERVISOR_LIST_REQUEST });

    const { data } = await api.get("/v1/institute/supervisor");

    dispatch({
      type: SupervisorListConst.SUPERVISOR_LIST_SUCCESS,
      payload: data.data.supervisors,
    });
  } catch (error) {
    dispatch({
      type: SupervisorListConst.SUPERVISOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeSupervisor = (newList) => async (dispatch) => {
  dispatch({
    type: SupervisorListConst.REMOVE_SUPERVISOR_SUCCESS,
    payload: newList,
  });
};

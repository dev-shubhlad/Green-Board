import { api } from "../../api/Axios";
import * as InstructorListConst from "../constants/ListConstants";

export const fetchInstructorList = () => async (dispatch) => {
  try {
    dispatch({ type: InstructorListConst.INSTRUCTOR_LIST_REQUEST });

    const { data } = await api.get("/v1/institute/instructors");

    dispatch({
      type: InstructorListConst.INSTRUCTOR_LIST_SUCCESS,
      payload: data.data.instructor.instructors,
    });
  } catch (error) {
    dispatch({
      type: InstructorListConst.INSTRUCTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

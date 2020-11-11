import { api } from "../../api/Axios";
import * as CourseListConst from "../constants/ListConstants";

export const fetchInstituteCourses = () => async (dispatch) => {
  try {
    dispatch({ type: CourseListConst.INSTI_COURSE_LIST_REQUEST });

    const { data } = await api.get("/v1/course/getAllCourses");

    dispatch({
      type: CourseListConst.INSTI_COURSE_LIST_SUCCESS,
      payload: data.data.courses,
    });
  } catch (error) {
    dispatch({
      type: CourseListConst.INSTI_COURSE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

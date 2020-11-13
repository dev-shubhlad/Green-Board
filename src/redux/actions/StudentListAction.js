import { api } from "../../api/Axios";
import * as StudentListConst from "../constants/ListConstants";

export const fetchStudentList = () => async (dispatch) => {
  try {
    dispatch({ type: StudentListConst.STUDENT_LIST_REQUEST });

    const { data } = await api.get("/v1/institute/getAllStudents");

    console.log("Student List", data);
    dispatch({
      type: StudentListConst.STUDENT_LIST_SUCCESS,
      payload: data.data.students,
    });
  } catch (error) {
    dispatch({
      type: StudentListConst.STUDENT_LIST_FAIL,
      payload: error.response
        ? error.response.data.message
          ? error.response.data.message
          : error.message
        : error.message,
    });
  }
};

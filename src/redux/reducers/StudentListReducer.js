import * as StudentListConst from "../constants/ListConstants";

export const StudentListReducer = (state = {}, action) => {
  switch (action.type) {
    case StudentListConst.STUDENT_LIST_REQUEST:
      return { loading: true };
    case StudentListConst.STUDENT_LIST_SUCCESS:
      return { loading: false, studentList: action.payload };
    case StudentListConst.ADD_STUDENT_SUCCESS:
      return {
        ...state,
        studentList: [...state.studentList, action.payload],
      };
    case StudentListConst.STUDENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

import * as InstructorListConst from "../constants/ListConstants";

export const InstructorListReducer = (state = {}, action) => {
  switch (action.type) {
    case InstructorListConst.INSTRUCTOR_LIST_REQUEST:
      return { loading: true };
    case InstructorListConst.INSTRUCTOR_LIST_SUCCESS:
      return { loading: false, instructorList: action.payload };
    case InstructorListConst.ADD_INSTRUCTOR_SUCCESS:
      return {
        ...state,
        instructorList: [...state.instructorList, action.payload],
      };
    case InstructorListConst.INSTRUCTOR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

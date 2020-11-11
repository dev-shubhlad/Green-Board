import * as CourseListConst from "../constants/ListConstants";

export const InstiCourseListReducer = (state = {}, action) => {
  switch (action.type) {
    case CourseListConst.INSTI_COURSE_LIST_REQUEST:
      return { loading: true };
    case CourseListConst.INSTI_COURSE_LIST_SUCCESS:
      return { loading: false, CourseList: action.payload };
    case CourseListConst.INSTI_COURSE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

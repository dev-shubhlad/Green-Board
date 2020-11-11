import * as SupervisorListConst from "../constants/ListConstants";

export const SupervisorListReducer = (state = {}, action) => {
  switch (action.type) {
    case SupervisorListConst.SUPERVISOR_LIST_REQUEST:
      return { loading: true };
    case SupervisorListConst.SUPERVISOR_LIST_SUCCESS:
      return { loading: false, supervisorList: action.payload };
    case SupervisorListConst.REMOVE_SUPERVISOR_SUCCESS:
      return { supervisorList: action.payload };
    case SupervisorListConst.SUPERVISOR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

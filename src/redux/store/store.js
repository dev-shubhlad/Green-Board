import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "../reducers/AuthReducer";
import {
  EmployeeProfileReducer,
  InstituteProfileReducer,
} from "../reducers/ProfileReducer";
import { SupervisorListReducer } from "../reducers/SupervisorListReducer";
import { InstiCourseListReducer } from "../reducers/CourseListReducer";
import { InstructorListReducer } from "../reducers/InstructorListReducer";
import { StudentListReducer } from "../reducers/StudentListReducer";

const reducer = combineReducers({
  auth: authReducer,
  user: EmployeeProfileReducer,
  institute: InstituteProfileReducer,
  listOfSupervisor: SupervisorListReducer,
  instiCourseList: InstiCourseListReducer,
  listOfInstructor: InstructorListReducer,
  listOfStudent: StudentListReducer,
});

const userTokenFromStorage = localStorage.getItem("AuthToken")
  ? JSON.parse(localStorage.getItem("AuthToken"))
  : null;

const initialState = {
  auth: { userToken: userTokenFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

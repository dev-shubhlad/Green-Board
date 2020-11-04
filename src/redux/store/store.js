import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "../reducers/AuthReducer";

const reducer = combineReducers({
  auth: authReducer,
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

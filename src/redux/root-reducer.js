import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

// Tried_user_is_slice_of_overall_state
const rootReducer = combineReducers({ user: userReducer });

export default rootReducer;

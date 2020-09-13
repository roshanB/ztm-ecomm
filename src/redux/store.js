import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

//Tried_that_array_of_middlware
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
// applyMiddleware(logger) this can also work

export default store;

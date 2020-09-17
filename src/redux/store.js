import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist"; //Tried_persist_store

import rootReducer from "./root-reducer";

//Tried_that_array_of_middlware
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
// applyMiddleware(logger) this can also work

export const persistor = persistStore(store); //Tried_persisted_version_of_our_store

export default store; //Tried_how_multiple_default_is_exported - not working

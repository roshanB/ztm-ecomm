import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

import { persistReducer } from "redux-persist"; //Tried_persist_reducer
import storage from "redux-persist/lib/storage"; //Tried_persist_using_localStorage

//Tried_config_object_for_redux_persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], //Tried_which_slice_of_reducer_we_want_to_persist
};

// Tried_user_is_slice_of_overall_state
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer); //Tried_export_persisted_reducer

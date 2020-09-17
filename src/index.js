import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react"; //Tried_provider_component_of_redux_persist
// PersistGate can be used for multiple platforms, this one is for react

import store, { persistor } from "./redux/store";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* Tried_setting_up_redux */}
    <Provider store={store}>
      {/* Tried_setting_up_router_for_app */}
      <BrowserRouter>
        {/* Tried_using_PersistGate_component_as_provider */}
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

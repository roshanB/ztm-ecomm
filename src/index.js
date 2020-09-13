import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* Tried_setting_up_redux */}
    <Provider store={store}>
      {/* Tried_setting_up_router_for_app */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

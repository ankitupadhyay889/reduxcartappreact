import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainreduxka from "./Mainreduxka";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./service/reducers/index";
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Mainreduxka />
  </Provider>,
  document.getElementById("root")
);

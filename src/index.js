import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "../src/redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.style.backgroundColor = "rgb(229 246 227)"
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);

reportWebVitals();

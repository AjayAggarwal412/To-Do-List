import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering the App component wrapped with Provider, passing the Redux store as a prop
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

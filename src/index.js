import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css";
import { configureStore } from "./store";
const store = configureStore();
console.log(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Products from "./Products";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <main>
      <Products />
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();

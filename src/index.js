import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css"; // Assuming index.css is in the same directory
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
reportWebVitals();

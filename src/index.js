import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css"; // Assuming index.css is in the same directory
import { HashRouter } from " react-router-dom/cjs/react-router-dom.min";
import { MyContextProvider } from "./contexts/CurrentTemperatureUnitContexts";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <MyContextProvider>
        <App />
      </MyContextProvider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();

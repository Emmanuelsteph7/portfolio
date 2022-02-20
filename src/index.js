import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AlertProvider } from "./components";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HelmetProvider>
        <AlertProvider>
          <App />
        </AlertProvider>
      </HelmetProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyles } from "./styles/global";
import StyledGlobalReset from "./styles/reset";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledGlobalReset />
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

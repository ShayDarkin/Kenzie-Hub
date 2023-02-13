import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./styles/global";
import StyledGlobalReset from "./styles/reset";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledGlobalReset />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

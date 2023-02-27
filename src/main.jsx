import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ProvidersGlobal from "./contexts/ProvidersGlobal.jsx";
import { GlobalStyles } from "./styles/global";
import StyledGlobalReset from "./styles/reset";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProvidersGlobal>
        <StyledGlobalReset />
        <GlobalStyles />
        <App />
      </ProvidersGlobal>
    </BrowserRouter>
  </React.StrictMode>
);

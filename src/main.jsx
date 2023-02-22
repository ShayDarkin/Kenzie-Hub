import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserProvider from "./contexts/UserContext";
import { GlobalStyles } from "./styles/global";
import StyledGlobalReset from "./styles/reset";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <StyledGlobalReset />
        <GlobalStyles />
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

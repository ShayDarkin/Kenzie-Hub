import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import TechContextProvider from "./contexts/TechContext";
import UserProvider from "./contexts/UserContext";
import { GlobalStyles } from "./styles/global";
import StyledGlobalReset from "./styles/reset";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TechContextProvider>
          <StyledGlobalReset />
          <GlobalStyles />
          <App />
        </TechContextProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

import { useState } from "react";
import ContentHomePage from "./components/ContentHomePage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import AppRoutes from "./routes";

import api from "./services/api";

function App() {
  const [page, setpage] = useState(false);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;

import { useState } from "react";
import ContentHomePage from "./components/ContentHomePage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";

import api from "./services/api";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;

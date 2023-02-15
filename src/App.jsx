import { useState } from "react";

import AppRoutes from "./routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "./services/api";

function App() {
  const [page, setpage] = useState(false);

  return (
    <div className="App">
      <AppRoutes />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../components/Header";
import HomePage from "../components/HomePage";
import ContentHomePage from "../components/ContentHomePage";
import Login from "../components/Login";
import Register from "../components/Register";
import ProtectedRoutes from "../protect_routes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoutes />}>
        <Route
          path="/homepage"
          element={
            <>
              <Header />
              <HomePage />
              <ContentHomePage />
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

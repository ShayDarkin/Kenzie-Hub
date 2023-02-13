import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../components/Header";
import HomePage from "../components/HomePage";
import ContentHomePage from "../components/ContentHomePage";
import Login from "../components/Login";
import Register from "../components/Register";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
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
    </Routes>
  );
}

export default AppRoutes;

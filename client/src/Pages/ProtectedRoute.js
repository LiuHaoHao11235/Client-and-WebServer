import React from "react";
import AdminPage from "./adminPage/AdminPage";
import auth from "./auth";
export const ProtectedRoute = () => {
  if (auth.isAuthenticated()) {
    return <AdminPage></AdminPage>;
  } else {
    return <h1>you are not allow to access this page</h1>;
  }
};

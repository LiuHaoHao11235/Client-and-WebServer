import React from "react";
import AdminPage from "./adminPage/AdminPage";
import auth from "./auth";
import { RedirectPage } from "./RedirectPage";
export const ProtectedRoute = () => {
  if (auth.isAuthenticated()) {
    return <AdminPage></AdminPage>;
  } else {
    return (
      <RedirectPage
        title="尚未獲得權限，請正確登入!!"
        delay={5000}
      ></RedirectPage>
    );
  }
};

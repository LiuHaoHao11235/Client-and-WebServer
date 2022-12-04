import React from "react";
import { RedirectPage } from "./RedirectPage";
import AuthContext from "./auth";
import { useContext } from "react";
export const ProtectedRoute = ({ children }) => {
  const Auth = useContext(AuthContext);
  if (Auth.isAuthenticated()) {
    return children;
  } else {
    return (
      <RedirectPage
        title="尚未獲得權限，請正確登入!!"
        delay={3000}
      ></RedirectPage>
    );
  }
};

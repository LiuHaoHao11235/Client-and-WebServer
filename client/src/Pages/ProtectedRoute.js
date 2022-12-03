import React from "react";
import AdminPage from "./adminPage/AdminPage";
import auth from "./auth";
import { RedirectPage } from "./RedirectPage";
import { useSessionStorage } from "./useSessionStorage";
export const ProtectedRoute = () => {
  const { value: Authenticated, setValue: setAuthenticated } =
    useSessionStorage("Authenticated", false);
  if (auth.isAuthenticated()) {
    //TODO 第一次登入成功時 將AUTH中的isAuthenticated狀態利用登出 改成FALSE(不改的話會造成無限迴圈setAuthenticated執行一次都會重新RENDER 重頭執行 而每次auth.isAuthenticated都是TRUE狀態 都會執行setAuthenticated) 並將登入狀態設定到SESSIONSTORAGE
    auth.logout();
    setAuthenticated(() => {
      return true;
    });
    return <AdminPage></AdminPage>;
  } else if (Authenticated) {
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

import React, { useState } from "react";
import { useSessionStorage } from "./useSessionStorage.js";
const AuthContext = React.createContext({
  initAuthenticated: false,
  login: () => {},
  logout: () => {},
  isAuthenticated: () => {},
});
export const AuthContextProvider = (props) => {
  const initAuthenticated = () => {
    if (JSON.parse(sessionStorage.getItem("initAuthenticated")) !== null) {
      return true;
    }
    return false;
  };

  const [authenticated, setAuthenticated] = useState(initAuthenticated());
  const { setValue: setInitAuthenticated } = useSessionStorage(
    "initAuthenticated",
    ""
  );
  const login = (callback) => {
    setAuthenticated(true);
    setInitAuthenticated(true);
    callback && callback();
  };

  const logout = (callback) => {
    setAuthenticated(false);
    setInitAuthenticated(false);
    callback && callback();
  };
  const isAuthenticated = () => {
    return authenticated;
  };
  return (
    <AuthContext.Provider
      // 記得提供 context 給 Provider
      value={{
        authenticated: authenticated,
        login: login,
        logout: logout,
        isAuthenticated: isAuthenticated,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

import React, { useState } from "react";

const AuthContext = React.createContext({
  authenticated: false,
  login: () => {},
  logout: () => {},
  isAuthenticated: () => {},
});

export const AuthContextProvider = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const login = (callback) => {
    setAuthenticated(true);
    callback && callback();
  };

  const logout = (callback) => {
    setAuthenticated(false);
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

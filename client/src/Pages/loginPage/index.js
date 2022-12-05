import { Layout } from "antd";
import { Navigate, Route, Routes } from "react-router-dom";
import "./Additional_Class.css";
import LoginForm from "./component/LoginForm";
import RegisterForm from "./component/RegisterForm";
import AuthContext from "../auth";
import { useContext } from "react";
const LoginPage = () => {
  const Auth = useContext(AuthContext);
  const { Content, Footer } = Layout;
  return (
    <Layout className="layout">
      <Content className="content">
        <Routes>
          <Route
            path="/"
            element={
              Auth.isAuthenticated() ? (
                <Navigate replace to="/admin"></Navigate>
              ) : (
                <LoginForm></LoginForm>
              )
            }
          ></Route>
          <Route
            path="/register"
            element={<RegisterForm></RegisterForm>}
          ></Route>
        </Routes>
      </Content>
      <Footer
        style={{
          height: "120px",
          textAlign: "center",
          background: "grey",
          color: "white",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        <br></br>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "800",
          }}
        >
          我的信箱:a250907790@gmail.com
        </h1>
        <br></br>
        <br></br>
        LiuHaoHao Design ©2022 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default LoginPage;

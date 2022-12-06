import { Form, Input, Checkbox, message } from "antd";
import "../Additional_Class.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  LoginSubmit,
  RememberSection,
  LoginWrapper,
  LoginSection,
} from "../style";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSessionStorage } from "../../useSessionStorage.js";
import AuthContext from "../../auth";
import { useContext } from "react";
const LoginForm = () => {
  // console.log("render LoginForm");
  const Auth = useContext(AuthContext);
  const { value: initUsername, setValue: setUsername } = useSessionStorage(
    "username",
    ""
  );
  const { value: initPassword, setValue: setPassowrd } = useSessionStorage(
    "password",
    ""
  );
  async function postForm(Form_Data) {
    let isLogin = false;
    await axios
      .post("http://localhost:8000/users/login", Form_Data)
      .then(() => {
        isLogin = true;
        message.success("登入成功", [1]);
      })
      .catch(() => {
        message.error("帳號或密碼錯誤", [1]);
      });
    setTimeout(() => {
      if (isLogin) {
        Auth.login(() => {
          sessionStorage.removeItem("username");
          sessionStorage.removeItem("password");
          navigate("/admin");
        });
      } else {
        navigate("/users");
      }
    }, [1000]);
  }
  const navigate = useNavigate();
  const onFinish = (Form_Data) => {
    console.log("格式驗證成功", Form_Data);
    postForm(Form_Data);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("格式驗證失敗");
  };
  const customVerify = (rule, value, callback) => {
    if (value.length === 0) {
      return Promise.reject("帳號不可為空");
    } else if (value.length > 12) {
      return Promise.reject("帳號不可超過12碼");
    } else {
      return Promise.resolve();
    }
  };
  return (
    <LoginWrapper>
      <LoginSection>
        <Form
          style={{ width: "500px", marginTop: "50px" }}
          name="basic"
          labelCol={{ offset: 2, span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用戶帳號"
            name="username"
            size="large"
            initialValue={initUsername}
            //!自定義驗證
            rules={[{ validator: customVerify }]}
          >
            <Input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item
            label="用戶密碼"
            size="large"
            name="password"
            initialValue={initPassword}
            //!聲明式驗證 直接使用別人定義的規格
            rules={[
              { required: true, message: "密碼不可為空" },
              { max: 12, message: "密碼最多為12碼" },
            ]}
          >
            <Input
              onChange={(e) => {
                setPassowrd(e.target.value);
              }}
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <RememberSection>
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
              wrapperCol={{ offset: 6, span: 8 }}
            >
              <Checkbox>記住密碼</Checkbox>
            </Form.Item>
            <Link to={`/forgot`}>
              <span style={{ marginLeft: "15px" }}>忘記密碼</span>
            </Link>
            <Link to={`/users/register`}>
              <span style={{ marginLeft: "15px" }}>註冊帳號</span>
            </Link>
          </RememberSection>
          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <LoginSubmit>登入</LoginSubmit>
          </Form.Item>
        </Form>
      </LoginSection>
    </LoginWrapper>
  );
};

export default LoginForm;

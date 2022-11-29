import { Form, Input, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  LoginWrapper,
  LoginSection,
  LoginSubmit,
  RememberSection,
} from "./style.js";
import { Link } from "react-router-dom";
import auth from "../auth.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginPage = (props) => {
  async function postForm(Form_Data) {
    let response;
    await axios
      .post("http://localhost:8000/users/login", Form_Data)
      .then(() => {
        response = true;
      })
      .catch((error) => console.error(error));

    if (response) {
      auth.login(() => {
        navigate("/admin");
      });
    } else {
      navigate("/login");
    }
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
            //!自定義驗證
            rules={[{ validator: customVerify }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} />
          </Form.Item>
          <Form.Item
            label="用戶密碼"
            size="large"
            name="password"
            //!聲明式驗證 直接使用別人定義的規格
            rules={[
              { required: true, message: "密碼不可為空" },
              { max: 12, message: "密碼最多為12碼" },
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} />
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
            <Link to={`/register`}>
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
export default LoginPage;

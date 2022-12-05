import { Cascader, Form, Input, Select, message } from "antd";
import { Link } from "react-router-dom";
import {
  RegisterWrapper,
  RegisterSection,
  RegisterSubmit,
  RememberSection,
} from "../style.js";
const { Option } = Select;
const residences = [
  {
    value: "台北市",
    label: "台北市",
    children: [
      {
        value: "內湖區",
        label: "內湖區",
        children: [
          {
            value: "內湖路",
            label: "內湖路",
          },
        ],
      },
    ],
  },
  {
    value: "台中市",
    label: "台中市",
    children: [
      {
        value: "北屯區",
        label: "北屯區",
        children: [
          {
            value: "甚麼路",
            label: "甚麼路",
          },
        ],
      },
    ],
  },
];
const onFinishFailed = () => {
  message.error("格式驗證錯誤");
};
const RegisterForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <RegisterWrapper>
      <RegisterSection>
        <Form
          style={{ width: "700px", marginTop: "50px" }}
          labelCol={{ span: 7 }}
          wrapperCol={{ offset: 0, span: 12 }}
          form={form}
          name="register"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            residence: ["縣市", "區", "路"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="信箱"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="密碼"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="確認密碼"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="nickname"
            label="暱稱"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="residence"
            label="你的地址"
            rules={[
              {
                type: "array",
                message: "Please select your habitual residence!",
              },
            ]}
          >
            <Cascader options={residences} />
          </Form.Item>

          <Form.Item
            name="phone"
            label="連絡電話"
            rules={[
              {
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <RememberSection>
              <RegisterSubmit>註冊帳號</RegisterSubmit>
              <Link
                style={{ marginLeft: "20px", fontSize: "14px" }}
                to="/users"
              >
                返回登入
              </Link>
            </RememberSection>
          </Form.Item>
        </Form>
      </RegisterSection>
    </RegisterWrapper>
  );
};
export default RegisterForm;

import "./index.css"
import React from 'react';
import axios from "axios";
import { Button, Form, Input } from 'antd';
const Login = () => {

  const onFinish = async (values) => {
    let token, refresh_token;
    const url = "http://localhost:3000/sig_in";
    await axios.post(url, values)
      .then((res) => {
        token = res.data.token;
        refresh_token = res.data.refreshToken;
        setCookie("token_3", token, 365);
        setCookie("refresh_token", refresh_token, 365);
        window.location.replace("/")
      });
  }

  const setCookie = (cookieName, cookieValue, expirationDays) => {
    const d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  }

 return (
  <div className="container">
    <div className="sigin">
      <Form
        name="basic"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
    </Form>
    </div>
  </div>
 )
}
export default Login;
import React from 'react';
import axios from "axios";
import { Button, Form, Input, message } from 'antd';

const Register = () => {

  const onFinish = async (values) => {
    const url = "http://localhost:3000/register"
    await axios.post(url, values)
      .then((res) => console.log("res", res))
      .catch((err) => message.error("đăng nhập thấy bại"))
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
            label="Họ và tên"
            name="user_name"
            rules={[{ required: true, message: 'Nhập họ và tên' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Nhập họ và tên!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Nhập mật khẩu!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Nhập lại mật khẩu"
            name="enter_password"
            rules={[{ required: true, message: 'Nhập lại mật khẩu' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Đăng ký
            </Button>
          </Form.Item>
      </Form>
      </div>
    </div>
  )
}
export default Register;
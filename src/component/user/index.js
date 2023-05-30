import axios from "axios";
import { Button, Form, Input, message } from 'antd';

const FormInput = () => {

  const handleForm = (values) => {
    const url = "http://localhost:3000/api/insert_info_user"
    axios.post(url, values)
      .then((res) => message.success("Thêm dữ liệu thành công"))
      .then((err) => message.error("không thành công"))
  }

  return (
    <div style={{ width: 500, display: "flex", justifyContent: "center" }}>
      <Form onFinish={handleForm}>
        <Form.Item
          label="Họ và tên"
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="phone"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giới tính"
          name="gender"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tỉnh"
          name="conscious"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Huyện"
          name="district"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Chọn lớp"
          name="id_room"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="ảnh"
          name="avatar"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Button>
          Cập nhật
        </Button>
      </Form>
    </div>
  )
}
export default FormInput;
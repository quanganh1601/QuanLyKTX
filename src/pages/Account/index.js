import "./index.css";
import { Select, DatePicker, Input, Button, Upload } from "antd";
import { useEffect, useState } from "react";
import { message } from 'antd';
import { getInforUser, updateInforUser } from "../../actions";
import { connect } from "react-redux";
import { Form } from "@ant-design/compatible";
import moment from 'moment';
import 'moment/locale/vi';
const Option = Select.Option
const dateFormat = 'YYYY/MM/DD';

const Account = (props) => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    const { getInforUser, accessToken } = props;
    getInforUser(accessToken);
  }, []);

  const fields = [
    { key: 1, name: "name", label: "Họ và tên" },
    { key: 2, name: "email", label: "Email" },
    { key: 3, name: "phone", label: "Số điện thoại" },
    { key: 4, name: "gender", label: "Giới tính" },
    { key: 5, name: "yearn_of_birth", label: "Ngày sinh" },
    { key: 6, name: "conscious", label: "Tỉnh" },
    { key: 7, name: "distric", label: "Huyện" },
    { key: 8, name: "xa", label: "Xã" },
  ];

  const halfIndex = Math.ceil(fields.length / 2);
  const leftFields = fields.slice(0, halfIndex);
  const rightFields = fields.slice(halfIndex);


  const handleSave = async () => {
    const { form, updateInforUser, accessToken, inforUser } = props;
    form.validateFieldsAndScroll((err, values) => {
      if (err) message.error("errors!");
      values = { ...values, id: inforUser.id };
      updateInforUser(accessToken, values).then((res) => {
        if (res) message.success("Cập nhật thành công");
      });
    });
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 10 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

  const renderInput = (field) => {
    let content;
    switch (field.key) {
      case 1:
      case 2:
      case 3:
      case 6:
      case 7:
      case 8:
        content = <Input/>
        break;

      case 4:
        content =
          <Select>
            <Option key={"Name"}>Nam</Option>
            <Option key={"Nữ"}>Nữ</Option>
          </Select>
        break;
        
      case 5:
        content =
          <DatePicker/>
        break;
    
      default:
        break;
    }
    return content;
  }

  const renderForm = (field) => {
    const { form, inforUser } = props;
    const dateFormat = 'YYYY/MM/DD';
    let values = { ...inforUser };
    let dateTime = values["yearn_of_birth"];
    dateTime = dateTime ? moment(dateTime, dateFormat) : dateTime;
    values = { ...values, yearn_of_birth: dateTime };

    return (
      <Form.Item
        {...formItemLayout}
        name={field.name}
        label={field.label}
        key={field.name}
      >
        {form && form.getFieldDecorator(
          field.name,
          {
            initialValue: values[field.name]
          }
        )
        (renderInput(field))}
      </Form.Item>
    )
  }

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url);
      });
    }
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  return (
    <Form className="form-account">
      <div className="form-item">
        <div className="left-field">{leftFields.map(renderForm)}</div>
        <div className="right-field">{rightFields.map(renderForm)}</div>
      </div>
      <Form.Item>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="http://localhost:3000/upload"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl
            ? <img
                src={imageUrl}
                alt="avatar"
                style={{ width: '100%' }}
              />
            : "Upload Img"}
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button onClick={handleSave}>
          Lưu
        </Button>
      </Form.Item>
    </Form>
  )
}


const mapStateToProps = (state) => ({
  inforUser: state.manager.inforUser
})

export default Form.create()(connect(mapStateToProps, { getInforUser, updateInforUser })(Account));
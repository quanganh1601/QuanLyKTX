import { Modal, Input, Dropdown, Button } from "antd";
import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import "./index.scss";
import Contact from "../../layout/component/table";
import { useState } from "react";
import { Form } from "@ant-design/compatible";

const dataSource = [
  { name: "Phòng 01", code_room: "P01", building: "Tòa N1" },
  { name: "Phòng 02", code_room: "P02", building: "Tòa N2" },
  { name: "Phòng 03", code_room: "P03", building: "Tòa N3" }
]

const columns = [
  {
    title: "Tên phòng",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Mã phòng",
    dataIndex: "code_room",
    key: "code_room"
  },
  {
    title: "Tên tòa nhà",
    dataIndex: "name_building",
    key: "buidling"
  }
];

const items = [
  { key: 1, label: "Tên phòng" },
  { key: 2, label: "Mã phòng" },
  { key: 3, label: "Tên tòa nhà" }
];

const fields = [
  { name: "name_building", label: "Tên tòa nhà" },
  { name: "code-room", label: "Mã phòng" },
  { name: "name_room", label: "Tên phòng" }
];

const ManagerRoom = (props) => {
  const {  } = props;
  const [visible, setVisible] = useState(false);

  const onCreateRoom = () => {

  };

  const onCancel = () => setVisible(false);

  return (
    <div className="container-room">
      <div className="header-room">
        <div className="wrapper-header-room">
          <div className="header-filters">
            <Dropdown
              menu={{ items }}
              placement="bottom"
              trigger={"click"}
              overlayClassName="dropdown-filter"
            >
              <div>
                <FilterOutlined />
                <span style={{ marginLeft: 5 }}>Filters</span>
              </div>
            </Dropdown>
          </div>
          <div className="header-search">
            <Input prefix={<SearchOutlined/>} placeholder="Tìm kiếm"/>
          </div>
        </div>
        <div className="header-button">
          <Button onClick={() => setVisible(true)}>
            Thêm mới
          </Button>
        </div>
      </div>
      <div className="body">
        <Contact
          dataSource={dataSource}
          columns={columns}
        />
        <Modal
          open={visible}
          title={"Thêm mới phòng"}
          ok={() => onCreateRoom()}
          onCancel={() => onCancel()}
        >
          <div className="modal-create-room">
            {fields.map((field) => (
              <Form.Item>
                {}
              </Form.Item>
            ))}
          </div>
        </Modal>
      </div>
    </div>
  )
};

export default Form.create()(ManagerRoom);
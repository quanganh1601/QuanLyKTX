import { Tabs, Row, Col } from "antd";
import "./index.css";
const LayoutRoom = () => {
  const array = [
    "Hoàng Thị Minh Anh",
    "Nguyễn Khánh Phương",
    "Trịnh Việt Anh",
    "Lê Anh Đào",
    "Lê Yến Nhi"
  ]

  const boxes = Array.from({ length: 7 }, (_, i) => (
    <Col key={i} className="box">
      <div className="box-room">
        <div className="header-box">{`A${i}`}</div>
        <div className="body-box">
          {array.map((i) => (
            <div className="full-name">{i}</div>
          ))}
        </div>
        <div className="total-student">
            {"5/5"}
          </div>
      </div>
    </Col>
  ));

  return (
    <div className="wrapper-room">
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab={"Nhà N1"} key={"1"}>
          <div className="tabs-room">
            <Row gutter={20}>
              {boxes}
            </Row>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab={"Nhà N2"} key={"2"}>
        </Tabs.TabPane>
        <Tabs.TabPane tab={"Nhà N3"} key={"3"}>
        </Tabs.TabPane>
        <Tabs.TabPane tab={"Nhà N4"} key={"4"}>
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}
export default LayoutRoom;
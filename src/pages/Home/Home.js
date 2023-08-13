import "./index.css"
import { Button, Calendar } from "antd";
import { Col, Row } from 'antd';
import { useEffect, useState } from "react";
import axios from "axios";
const Home = (props) => {
  const list = [
    { key: 1, title: "Sinh Viên", count: "14320", discription: "Tổng số tài khoản sinh viên", color: "#f56954" },
    { key: 2, title: "Cán bộ", count: "23", discription: "Tổng số tài khoản cán bộ", color: "#00a65a" },
    { key: 3, title: "Đăng ký", count: "3222", discription: "Tổng số đăng ký trong kỳ", color: "#00c0ef" },
    { key: 4, title: "Sự tham dự", count: "0", discription: "Tổng số sinh viên", color: "#0073b7" },
  ]

  const [count, setCount] = useState(0)

  useEffect(() => {
    getUserInfo()
  }, []);

  async function getUserInfo() {
    try {
      const response = await axios.get('https://www.tiktok.com/api/user/detail', {
        headers: {
          'authority': 'www.tiktok.com',
          'accept': 'application/json, text/plain, */*',
          'x-secsdk-csrf-version': '1.2.5',
          'x-secsdk-csrf-request': '1',
          'x-secsdk-csrf-token': '',
          'pragma': 'no-cache',
          'cache-control': 'no-cache',
          'cookie': `sessionid_ss=739f0572904f9db80db627991905e196;`,
          'referer': 'https://www.tiktok.com/',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299',
          'x-tt-token': '',
        }
      });
      const userInfo = response.data.userInfo;
      console.log(`Tên người dùng: ${userInfo.nickname}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="header-home">
          <div className="header-note">
            <Button onClick={() => setCount(count+1)}>count{count}</Button>
            - Tài khoản của bạn chưa được xác thực vì:
          </div>
          <div className="note">
            <img src="https://cdn.pixabay.com/photo/2014/04/03/00/34/tick-308741_960_720.png" className="img-tick"/>
            <div>Chưa cập nhật đầy đủ thông tin cá nhân, thông tin gia đình</div>
          </div>
          <div className="note">
            <img src="https://cdn.pixabay.com/photo/2014/04/03/00/34/tick-308741_960_720.png" className="img-tick"/>
            <div>Chưa cập nhật ảnh 4x6</div>
          </div>
        </div>
        <div className="body-home">
          <div className="calendar">
            <Row>
              <Col span={24}>
                <Calendar className="calendar-home" fullscreen={false}/>
              </Col>
            </Row>
          </div>
          <div className="statistical">
            <Row>
              {list.map((i) => (
                <Col key={i.key} span={24} style={{ backgroundColor: i.color }} className="box-statistical">
                  <div className="count">{i.count}</div>
                  <h3 className="title">{i.title}</h3>
                  <span>{i.discription}</span>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Home;
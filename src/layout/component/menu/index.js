import "./index.css";
import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
  WhatsAppOutlined,
  TeamOutlined,
  SyncOutlined
} from '@ant-design/icons';
import { Menu, Avatar } from "antd";
import { useState } from "react";
import { connect } from "react-redux";


const SideBar = (props) => {
  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Trang chủ', '1', <HomeOutlined />),
    getItem('Quản lý đăng ký', '2', <UsergroupAddOutlined />),
    getItem('Dịch vụ hỗ trợ', '3', <WhatsAppOutlined />),
    getItem('Hỗ trợ, phản ánh', '4', <SyncOutlined />),
    getItem('Cán bộ', '5', <TeamOutlined />),
    getItem('Tài liệu học tập', '6', <ContainerOutlined />),
    getItem('Thanh toán', '7', <PieChartOutlined />),
    getItem('Bảng ghi chú', '8', <DesktopOutlined />),
    getItem('Tin nhắn', '9', <ContainerOutlined />),
  ]

  const style = {width: props.collapsed ? '64px' : "248px"}
  return (
    <div className="menu" style={{...style}}>
      <div className="menu-wrapper">
      <div className="header-menu">
        <Avatar
          size={{ xxl: 100 }}
          className="avatar"
        >
          {"A"}
        </Avatar>
        <text className="text">HDU</text>
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={props.collapsed}
        items={items}
        className="side-bar"
      />
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  collapsed: state.manager.collapsed
})
export default connect(mapStateToProps, {})(SideBar);

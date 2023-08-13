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
  SyncOutlined,
  LockOutlined,
  BorderVerticleOutlined
} from '@ant-design/icons';
import { Menu, Avatar } from "antd";
import { useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";



const SideBar = (props) => {

  const menus = [
    {
      key: "1",
      title: "Trang chủ",
      icon: <HomeOutlined />,
      href: "/"
    },
    {
      key: "2",
      title: "Quản lý đăng ký",
      icon: <UsergroupAddOutlined />,
      item: [
        { 
          key: 1,
          title: "Danh sách phòng",
          href: "/manager-room"
        },
        {
          key: 2,
          title: "Danh sách sinh viên",
          href: "/manager-student"
        }
      ]
    },
    {
      key: "11",
      title: "Sơ đồ phòng",
      icon: <BorderVerticleOutlined />,
      href: "/layout-room"
    },
    {
      key: "3",
      title: "Dịch vụ hỗ trợ",
      icon: <WhatsAppOutlined/>,
      href: "/service"
    },
    {
      key: "4",
      title: "Hỗ trợ, phản ánh",
      icon: <SyncOutlined/>,
      href: "/support"
    },
    {
      key: "5",
      title: "Cán bộ",
      icon: <TeamOutlined/>,
      href: "/officer"
    },
    {
      key: "6",
      title: "Tài liệu học tập",
      icon: <ContainerOutlined/>,
      href: "/document-student"
    },
    {
      key: "7",
      title: "Thanh toán",
      icon: <PieChartOutlined/>,
      href: "/pay"
    },
    {
      key: "8",
      title: "Bảng ghi chú",
      icon: <DesktopOutlined/>,
      href: "/note-board"
    },
    {
      key: "9",
      title: "Tin nhắn",
      icon: <ContainerOutlined/>,
      href: "/message"
    },
    {
      key: "10",
      title: "Tài khoản",
      icon: <LockOutlined />,
      href: "/account"
    }
  ]

  const rendermenu = (menu) => {
    if (menu.key == "2") {
      return (
        <Menu.SubMenu icon={menu.icon} title={menu.title}>
          {menu.item.map((i, index) => (
            <Menu.Item key={i.href}>
              <Link to={i.href}>
                <a>
                  {i.title}
                </a>
              </Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      )
    }

    return(
      <Menu.Item key={menu.href}>
        <Link to={menu.href}>
          <a>
            {menu.icon}
            <span>{menu.title}</span>
          </a>
        </Link>
      </Menu.Item>
    )
  }

  const style = {width: props.collapsed ? '64px' : "248px"}
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className="menu" style={{...style}}>
      <div className="menu-wrapper">
        <div className="header-menu">
          <Avatar
            className="avatar"
          >
            {"A"}
          </Avatar>
          <span className="text">HDU</span>
        </div>
        <Menu
          defaultSelectedKeys={['/']}
          mode="inline"
          theme="dark"
          inlineCollapsed={props.collapsed}
          className="side-bar"
          selectedKeys={[pathName]}
        >
          {menus.map(rendermenu)}
        </Menu>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  collapsed: state.manager.collapsed
})
export default connect(mapStateToProps, {})(SideBar);

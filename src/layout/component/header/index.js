import "./index.css";
import { Avatar } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import { connect } from "react-redux"; 
import { handleCollapsed } from "../../../actions";
import { useState, useEffect } from "react";

const Header = ({...restprop}) => {
  const [collapsed, setCollapsed] = useState(restprop.collapsed)
  
  const handle = () => {
    restprop.handleCollapsed(!collapsed);
    setCollapsed(!collapsed)
  }

  const style = { width: collapsed ? 'calc(100% - 64px)' : 'calc(100% - 248px)' };

  return (
    <div className="header" style={{...style}}>
      <div className="wrapper-header">
        <div className="btn-action-menu">
          <div onClick={() => handle()}>
          <MenuFoldOutlined/>
          </div>
        </div>
        <div className="header-title">
          Trang chủ
        </div>
      </div>
      <div className="header-right">
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
        <div className="user-name-role">

        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  collapsed: state.manager.collapsed
})

export default connect(mapStateToProps, { handleCollapsed })(Header)
import "./index.css";
import Menu from "../component/menu";
import Header from "../component/header";
import Footer from "../component/footer";
import {connect } from "react-redux";

const DefaultLayout = ({ children, collapsed }) => {
  const style = {width: collapsed ? "calc(100% - 64px)" : "calc(100% - 248px)"}
  console.log("header")
  return (
    <div className="layout">
      <Menu/>
      <Header/>
      <div className="content-container" style={{...style}}>
        <div className="container-layout">
          {children}
          <Footer/>
        </div>
      </div>
    </div>
  )
}
const mapPropsToState = (state) => ({
  collapsed: state.manager.collapsed
});
export default connect(mapPropsToState)(DefaultLayout);
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { publicSidebarGenerator } from "../../utils/topbarGenerator";
import { authenticUserRoutes } from "../../routes/route.user";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentToken } from "../../redux/feature/auth/authSlice";
import { VerifyToken } from "../../utils/VerifyToken";
import { TUser } from "../../types";
import { adminPath } from "../../routes/route.admin";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "./DashboardLayout";
import { useEffect } from "react";

const userRole = {
  USER: "user",
  ADMIN: "admin",
};

const SideBarItem = () => {

  const token = useAppSelector(selectCurrentToken);
  let user;

  

  if (token) {
    user = VerifyToken(token);
  }

  let sidebarItems;

  switch ((user as TUser).role) {
    case userRole.USER:
      sidebarItems = publicSidebarGenerator(authenticUserRoutes, userRole.USER);
      sidebarItems = [
        ...sidebarItems,
        { key: "3", label: <NavLink to={"/"}>Home</NavLink> },
  
      ];

      break;
    case userRole.ADMIN:
      sidebarItems = publicSidebarGenerator(adminPath, userRole.ADMIN);
      sidebarItems = [
        ...sidebarItems,
        { key: "joy", label: <NavLink to={"/"}>Home</NavLink> },
      ];

      break;

    default:
      break;
  }

  return (
    <Sider
      className="h-[100vh]"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div style={{ padding: "20px", textAlign: "center" }}>
        <img
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/111014373?v=4"
          alt="User"
          style={{ width: "100px", marginBottom: "10px" }}
        />
      </div>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default SideBarItem;

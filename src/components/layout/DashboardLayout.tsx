import React from "react";
import { Layout, Input, Menu, theme, Dropdown, Badge } from "antd";
import { MailOutlined, BellOutlined, SearchOutlined } from "@ant-design/icons";
import SideBarItem from "./SideBarItem";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../ui/ScrollToTop/ScrollToTop";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const DashboardLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const notificationsMenu = (
    <Menu>
      <Menu.Item key="1">Notification 1</Menu.Item>
      <Menu.Item key="2">Notification 2</Menu.Item>
      <Menu.Item key="3">Notification 3</Menu.Item>
    </Menu>
  );

  const userMenu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <SideBarItem />
      <Layout>
        <Header
          style={{
            padding: 8,
            background: "#00725A", // Primary color
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          {/* Search on the left side */}
          <Search
            placeholder="Search..."
            style={{ width: 300, marginLeft: "45px" }}
          />

          {/* Icons on the right side */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Dropdown overlay={notificationsMenu} trigger={["click"]}>
              <div style={{ color: "white", margin: "0 16px" }}>
                <Badge count={5}>
                  <BellOutlined style={{ fontSize: "20px" }} />
                </Badge>
              </div>
            </Dropdown>
            <Dropdown overlay={userMenu} trigger={["click"]}>
              <div style={{ color: "white", margin: "0 16px" }}>
                <MailOutlined style={{ fontSize: "20px" }} />
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
         
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;

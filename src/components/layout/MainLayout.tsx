import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import App from "../../App";
import TopNavbar from "../ui/TopNavbar";
import { ConfigProvider } from "antd";
import Navbar from "../ui/Navbar";
import Banner from "../ui/Banner/Banner";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div>
      {/* <TopNavbar /> */}
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemSelectedBg: "#00725A",
            },
          },
        }}>
        <Navbar />
      </ConfigProvider>

      {location.pathname === "/offered" ? <Banner /> : ""}

      <Outlet />
    </div>
  );
};

export default MainLayout;

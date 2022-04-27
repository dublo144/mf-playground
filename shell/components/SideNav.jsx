import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

const { Sider } = Layout;

import { useSideNavCollapsed } from "shell/shellContext";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [collapsed, setCollapsed] = useSideNavCollapsed();

  return (
    <Sider
      theme="light"
      collapsed={collapsed}
      collapsible
      onCollapse={() => setCollapsed(!collapsed)}
    >
      <div className="logo" />
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to={"/appOne"}>Application 1</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to={"/todo"}>Todo App</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideNav;

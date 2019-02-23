import { Layout } from "antd";
import React, { useState } from "react";
import "./UserLayout.scss";

export { default as TeacherLayout } from "./TeacherLayout";

const { Header, Content, Footer, Sider } = Layout;

const UserLayout = props => {
  const [siderCollapsed, setSiderCollapsed] = useState(false);
  return (
    <Layout className={`UserLayout ${siderCollapsed ? "LayoutCollapsed" : ""}`}>
      <Sider
        collapsible
        collapsed={siderCollapsed}
        onCollapse={setSiderCollapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
      >
        <div className="UserLayoutLogoContainer mb-2 py-3 d-flex align-items-center justify-content-center">
          <div className="d-flex flex-directions-row align-items-center justify-content-center">
            <img class="img-fluid mr-2" src="/logo.png" alt="@ school logo" />
            <h4
              className={`${
                siderCollapsed ? "UserLayoutLogoContainerCollapsed" : ""
              }`}
            >
              @ School
            </h4>
          </div>
        </div>
        {props.sidebarMenu}
      </Sider>
      <Layout
        className={`LayoutContent ${siderCollapsed ? "" : "LayoutCollapsed"}`}
      >
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div style={{ padding: 24, background: "#fff", textAlign: "center" }}>
            ...
            <br />
            Really
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            long
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            content
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default UserLayout;

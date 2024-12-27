import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

const Dashboard = () => (
  <Layout style={{ padding: '0 24px 24px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
      <Breadcrumb.Item>Bảng điều khiển</Breadcrumb.Item>
    </Breadcrumb>
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <h1>Chào mừng tới bảng điều khiển Admin</h1>
    </Content>
  </Layout>
);

export default Dashboard;

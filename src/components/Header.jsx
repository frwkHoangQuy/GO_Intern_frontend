import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const AppHeader = () => (
  <Header className="header">
    <div className="logo">TailAdmin</div>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">Dashboard</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Profile</Menu.Item>
    </Menu>
  </Header>
);

export default AppHeader;

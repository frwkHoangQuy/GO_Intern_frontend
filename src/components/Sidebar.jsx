import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, PieChartOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => (
  <Sider width={200} className="site-layout-background" style={{ borderRight: '0.5px solid gray', height: '99vh' }}>
    <div
      style={{
        textAlign: 'center',
        padding: '16px 0',
        backgroundColor: 'white',
        color: 'black',
        fontSize: '20px',
        fontWeight: 'bold',
        borderBottom: '1px solid gray',
        height: "8%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      G-Scores
    </div>
    <Menu mode="inline" defaultSelectedKeys={['1']} style={{ borderRight: 0, paddingTop: '15px', height: "92%" }}>
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        <Link to="/">Bảng điều khiển</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<SearchOutlined />}>
        <Link to="/search" >Tìm Kiếm</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        <Link to="/top-students">Top Điểm Cao</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<PieChartOutlined />}>
        <Link to="/total-scores-chart">Biểu Đồ Tổng Điểm</Link>
      </Menu.Item>
    </Menu>
  </Sider>
);

export default Sidebar;

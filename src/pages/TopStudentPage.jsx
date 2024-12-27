import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import TopStudentsTable from '../components/TopStudentTable';

const { Content } = Layout;

const TopStudentsPage = () => (
  <Layout style={{ height: '95vh', overflow: 'hidden' }}>
    <Breadcrumb style={{ margin: '16px 0', padding: '0 24px' }}>
      <Breadcrumb.Item>Trang Chủ</Breadcrumb.Item>
      <Breadcrumb.Item>Học Sinh Điểm Cao</Breadcrumb.Item>
    </Breadcrumb>
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        height: 'calc(100vh - 88px)',
        overflow: 'auto',
      }}
    >
      <TopStudentsTable />
    </Content>
  </Layout>
);

export default TopStudentsPage;

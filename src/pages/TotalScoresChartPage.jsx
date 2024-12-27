import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import TotalScoresChart from '../components/TotalScoresChart';

const { Content } = Layout;

const TotalScoresChartPage = () => (
  <Layout style={{ height: '95vh', overflow: 'hidden' }}> 
    <Breadcrumb style={{ margin: '16px 0', padding: '0 24px' }}>
      <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
      <Breadcrumb.Item>Biểu đồ tổng điểm</Breadcrumb.Item>
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
      <TotalScoresChart />
    </Content>
  </Layout>
);

export default TotalScoresChartPage;

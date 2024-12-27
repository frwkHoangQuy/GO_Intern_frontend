import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import SearchComponent from '../components/Search';

const { Content } = Layout;

const SearchPage = () => (
  <Layout style={{ height: '95vh', overflow: 'hidden' }}>
    <Breadcrumb style={{ margin: '16px 0', padding: '0 24px' }}>
      <Breadcrumb.Item>Trang Chủ</Breadcrumb.Item>
      <Breadcrumb.Item>Tìm Kiếm</Breadcrumb.Item>
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
      <SearchComponent />
    </Content>
  </Layout>
);

export default SearchPage;

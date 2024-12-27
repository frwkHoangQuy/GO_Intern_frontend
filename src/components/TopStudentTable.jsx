import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Select, message, Card } from 'antd';
import useFetch from '../hook/useFetch'; 

const { Option } = Select;

const TopStudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [top, setTop] = useState(10);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [inputTop, setInputTop] = useState(top.toString());
  const [endpoint, setEndpoint] = useState('top_students/?top=10');

  const { data, loading, error } = useFetch(endpoint);

  useEffect(() => {
    if (data) {
      setStudents(data);
      setEndpoint(null);
    }
    if (error) {
      message.error('Có lỗi xảy ra khi lấy dữ liệu');
      setEndpoint(null);
    }
  }, [data, error]);

  const handleTopInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9]*$/.test(value)) {
      setInputTop(value);
    }
  };

  const handleFetchTopStudents = () => {
    const value = parseInt(inputTop, 10);
    if (!isNaN(value) && value > 0) {
      setTop(value);
      setPage(1);
      setEndpoint(`top_students/?top=${value}`);
      setTimeout(() => {
        setEndpoint(null);
      }, 0);
    } else {
      message.error('Vui lòng nhập một số hợp lệ lớn hơn 0');
    }
  };

  const handlePageSizeChange = (value) => {
    setPageSize(value);
    setPage(1);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  const columns = [
    { title: 'SBD', dataIndex: 'sbd', key: 'sbd' },
    { title: 'Toán', dataIndex: 'toan', key: 'toan' },
    { title: 'Vật Lý', dataIndex: 'vat_li', key: 'vat_li' },
    { title: 'Hóa Học', dataIndex: 'hoa_hoc', key: 'hoa_hoc' },
    { title: 'Tổng điểm', dataIndex: 'total_score', key: 'total_score' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Card title="Số lượng học sinh top" bordered={false}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Input
            placeholder="Nhập số lượng học sinh"
            value={inputTop}
            onChange={handleTopInputChange}
            style={{ width: '200px' }}
          />
          <Select
            value={pageSize}
            style={{ width: '120px' }}
            onChange={handlePageSizeChange}
          >
            <Option value={5}>5</Option>
            <Option value={10}>10</Option>
            <Option value={20}>20</Option>
            <Option value={50}>50</Option>
          </Select>
          <Button type="primary" onClick={handleFetchTopStudents} loading={loading}>
            Cập nhật
          </Button>
        </div>
      </Card>

      <Table
        dataSource={students.slice((page - 1) * pageSize, page * pageSize)}
        columns={columns}
        rowKey="sbd"
        pagination={{
          current: page,
          pageSize: pageSize,
          total: students.length,
          onChange: handlePageChange,
        }}
        loading={loading}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default TopStudentsTable;

import React, { useState, useEffect } from 'react';
import { Input, Button, Table, message, Card } from 'antd';
import useFetch from '../hook/useFetch';

const SearchComponent = () => {
  const [sbd, setSbd] = useState('');
  const [endpoint, setEndpoint] = useState(null);
  const [student, setStudent] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null); 

  const { data, loading, error } = useFetch(endpoint);

  const handleSearch = () => {
    if (!sbd) {
      message.error('Vui lòng nhập số báo danh!');
      return;
    }
    setStudent(null); 
    setErrorMessage(null);
    setEndpoint(`search_student/${sbd}/`);
  };

  useEffect(() => {
    if (data) {
      setStudent(data); 
      setErrorMessage(null); 
      setEndpoint(null); 
    }
    if (error) {
      setStudent(null); 
      setErrorMessage('Không tìm thấy kết quả, vui lòng thử lại!'); 
      setEndpoint(null); 
    }
  }, [data, error]);

  const columns = [
    { title: 'Môn học', dataIndex: 'subject', key: 'subject' },
    { title: 'Điểm', dataIndex: 'score', key: 'score' },
  ];

  const studentData = student
    ? [
        { key: '1', subject: 'Toán', score: student.toan || 'N/A' },
        { key: '2', subject: 'Ngữ Văn', score: student.ngu_van || 'N/A' },
        { key: '3', subject: 'Ngoại Ngữ', score: student.ngoai_ngu || 'N/A' },
        { key: '4', subject: 'Vật Lý', score: student.vat_li || 'N/A' },
        { key: '5', subject: 'Hóa Học', score: student.hoa_hoc || 'N/A' },
        { key: '6', subject: 'Sinh Học', score: student.sinh_hoc || 'N/A' },
        { key: '7', subject: 'Lịch Sử', score: student.lich_su || 'N/A' },
        { key: '8', subject: 'Địa Lý', score: student.dia_li || 'N/A' },
        { key: '9', subject: 'GDCD', score: student.gdcd || 'N/A' },
        { key: '10', subject: 'Mã Ngoại Ngữ', score: student.ma_ngoai_ngu || 'N/A' },
      ]
    : [];

  return (
    <div>
      <Card title="Tìm kiếm học sinh" bordered={false} style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Input
            placeholder="Nhập số báo danh"
            value={sbd}
            onChange={(e) => setSbd(e.target.value)}
            style={{ width: '300px' }}
          />
          <Button type="primary" onClick={handleSearch} loading={loading}>
            Tìm Kiếm
          </Button>
        </div>
      </Card>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {student && (
        <Card title={`Kết quả tìm kiếm cho SBD: ${student.sbd}`} bordered={false}>
          <Table dataSource={studentData} columns={columns} pagination={false} bordered />
        </Card>
      )}
    </div>
  );
};

export default SearchComponent;

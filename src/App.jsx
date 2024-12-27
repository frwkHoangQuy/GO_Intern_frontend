import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import AppHeader from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TopStudentsPage from './pages/TopStudentPage';
import TotalScoresChartPage from './pages/TotalScoresChartPage';
import SearchPage from './pages/SearchPage'; // Import SearchPage

const App = () => (
  <Router>
    <Layout style={{ minHeight: '99vh', minWidth: '98vw' }}>
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/top-students" element={<TopStudentsPage />} />
            <Route path="/total-scores-chart" element={<TotalScoresChartPage />} />
            <Route path="/search" element={<SearchPage />} /> {/* Thêm route mới */}
          </Routes>
        </Layout>
      </Layout>
    </Layout>
  </Router>
);

export default App;

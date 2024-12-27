import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import useFetch from '../hook/useFetch'; 

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TotalScoresChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [endpoint, setEndpoint] = useState('statistics_report/');
  const { data, loading, error } = useFetch(endpoint);

  useEffect(() => {
    if (data) {
      const labels = Object.keys(data);
      const dataset8AndAbove = labels.map((subject) => data[subject]?.['>=8'] || 0);
      const dataset6To8 = labels.map((subject) => data[subject]?.['8> && >=6'] || 0);
      const dataset4To6 = labels.map((subject) => data[subject]?.['6> && >=4'] || 0);
      const datasetBelow4 = labels.map((subject) => data[subject]?.['<4'] || 0);

      setChartData({
        labels,
        datasets: [
          {
            label: '10 => 8',
            data: dataset8AndAbove,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          {
            label: '8 => 6',
            data: dataset6To8,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
          {
            label: '6 => 4',
            data: dataset4To6,
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
          },
          {
            label: '4 => 0',
            data: datasetBelow4,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          },
        ],
      });
      setEndpoint(null); 
    }
    if (error) {
      setEndpoint(null); 
    }
  }, [data, error]);

  const handleRetry = () => {
    setEndpoint('statistics_report/'); 
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p>Unable to fetch data. Please try again later.</p>
        <button onClick={handleRetry}>Retry</button>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <h2>Biểu đồ tổng điểm</h2>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Thống kê điểm theo từng môn',
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Subjects',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Số lượng học sinh',
              },
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default TotalScoresChart;

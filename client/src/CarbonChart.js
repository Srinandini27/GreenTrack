import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

function CarbonChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get('/api/summary').then(res => {
      setChartData({
        labels: res.data.labels,
        datasets: [{
          label: 'Carbon Emission (kg CO₂)',
          data: res.data.values,
          backgroundColor: '#3e8e41'
        }]
      });
    });
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Carbon Emission Summary</h3>
      <Bar data={chartData} />
    </div>
  );
}
export default CarbonChart;
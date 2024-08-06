import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registering the required components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = () => {
  // Initial chart data
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Sales',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }]
  });

  // Function to update chart data based on selected period
  const handlePeriodChange = (period) => {
    let labels = [];
    let data = [];
    
    switch (period) {
      case 'weekly':
        labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        data = [12, 19, 3, 5];
        break;
      case 'monthly':
        labels = ['January', 'February', 'March', 'April', 'May', 'June'];
        data = [65, 59, 80, 81, 56, 55];
        break;
      case 'yearly':
        labels = ['2020', '2021', '2022', '2023'];
        data = [210, 150, 300, 220];
        break;
      default:
        labels = [];
        data = [];
    }

    setChartData({
      labels: labels,
      datasets: [{
        label: 'Sales',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }]
    });
  };

  return (
    <div className="col-md-9 mb-4">
      <div className="card h-100">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div>
            <i className="fas fa-chart-bar me-1"></i>
            Bar Chart Example
          </div>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Select Time Period
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#" onClick={() => handlePeriodChange('weekly')}>Weekly</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handlePeriodChange('monthly')}>Monthly</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handlePeriodChange('yearly')}>Yearly</a></li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <Bar data={chartData} options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: (context) => `${context.dataset.label}: ${context.raw}`
                }
              }
            }
          }} />
        </div>
      </div>
    </div>
  );
};

export default BarChart;

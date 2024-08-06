import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Title } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(Tooltip, Legend, ArcElement, Title, ChartDataLabels);

const ProgressChart = () => {
  const data = {
    datasets: [{
      data: [90, 10],
      backgroundColor: ['#c0463e', '#343a40'],
      borderWidth: 0,
    }],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: '#fff',
        formatter: (value) => {
          return `${value}%`;
        },
        anchor: 'end',
        align: 'end',
        font: {
          weight: 'bold',
          size: 14,
        },
        offset: 4,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '80px', height: '80px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ProgressChart;

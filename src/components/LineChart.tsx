// components/LineChart.tsx
'use client';

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Weight } from 'lucide-react';
import { title } from 'process';
import { Line } from 'react-chartjs-2';
import { text } from 'stream/consumers';

// Register necessary elements
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Revenue',
      data: [12000, 15000, 10000, 17000, 4000],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      tension: 0.5,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    x:{
        title: {display : true, text: 'Staff Performance', font: {size: 14, weight: 'bold'}}

    },
    y:{
       title: {display : true, text: 'Satisfaction', font: {size: 14, weight: 'bold'}},
       beginAtZero: true,
    },
  },
};

export default function LineChart() {
  return (
    <div style={{ width: '350px', height: '300px' }}>
      <Line data={data} options={options} />
    </div>
  );
}

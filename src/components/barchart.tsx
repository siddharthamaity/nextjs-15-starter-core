// components/MyBarChart.tsx
'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Staff Performance', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Revenue',
      data: [1200, 1900, 3000, 5000],
      backgroundColor: 'rgba(75,192,192,0.6)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Monthly Revenue',
    },
  },
};

export default function MyBarChart() {
  return <Bar data={data} options={options} />;
}

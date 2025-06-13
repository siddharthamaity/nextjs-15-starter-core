'use client';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Staff Performance', 'Cleanliness', 'Crowd Control'],
  datasets: [
    {
      label: 'Rating',
      data: [4, 5, 3],
      backgroundColor: '#e8bf09',
    },
  ],
};

const options = {
  indexAxis: 'y' as const,
  responsive: true,
  animation: {
    duration: 1000,
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

export default function HorizontalBarChart({ shouldRender }: { shouldRender: boolean }) {
  return shouldRender ? <Bar data={data} options={options} /> : null;
}

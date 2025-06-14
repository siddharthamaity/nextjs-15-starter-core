'use client';

import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

import type { ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Infrastructure', 'Quality Of Service', 'Safety', 'Innovation'],
  datasets: [
    {
      
      data: [300, 150, 100, 90],
      backgroundColor: ['#50C878', '#FF5733','#FFD700','#1E90FF'],
      borderWidth: 0,
    },
  ],
};

const options: ChartOptions<'pie'> = {  
  responsive: true,
  animation: {
    animateRotate: true,
    duration: 1000,
  },
  plugins: {
    title: {
      display: true,             
      text: 'Most valued tourism management components',  
      font: {
        size: 15,
        weight: 'bold',
      },
      color: '#505050',            
      padding: 0,
      align: 'center',          
    },
    legend: {
      position: 'top',
    },
  },
};

export default function PieChart({ shouldRender }: { shouldRender: boolean }) {
  return shouldRender ? <Pie data={data} options={options} /> : null;
}

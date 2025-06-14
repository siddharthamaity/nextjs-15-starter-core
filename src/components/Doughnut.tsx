'use client';

import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';

interface Props {
  shouldRender: boolean;
}

const initialData:  ChartData<'doughnut'> = {
  labels: ['Samsung'],
datasets: [
    {
      label: 'Market Share',
      data: [0, 0], // Start with 0s for animation
      backgroundColor: ['#1d1d1d27', '#36A2EB'],
      borderWidth: 0,
    },
  ],
};

const finalData = {
  labels: ['Excellent', 'Very Good', 'Average', 'Poor', 'Terrible'],
  datasets: [
    {
      label: 'Visitor Service Satisfaction',
      data: [11412, 6660, 1982, 324, 185],
      backgroundColor: ['	#50C878', '	#A8E05F', '#FFD93B', '#FF8C42', '#FF4C4C'],
      borderWidth: 0,
    },
  ],
};

const options: ChartOptions<'doughnut'> = {
  responsive: true,
  plugins: {
    title: {
      display: true,             
      text: 'Visitor Service Satisfaction',  
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
  cutout: '80%',
  animation: {
    duration: 1000,
  },
};

export default function DoughnutChart({ shouldRender }: Props) {
  const [chartData, setChartData] = useState(initialData);

  useEffect(() => {
    if (shouldRender) {
      // Delay to trigger animation
      const timeout = setTimeout(() => {
        setChartData(finalData);
      }, 100); // small delay for visual effect
      return () => clearTimeout(timeout);
    }
  }, [shouldRender]);

  return <Doughnut data={chartData} options={options} />;
}

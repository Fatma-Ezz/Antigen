import React from 'react';
import { Line } from 'react-chartjs-2';

const ProgressChart = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Total Weight Lifted (kg)',
        data: [500, 750, 1000, 1250],
        borderColor: 'rgba(255, 105, 180, 1)', // Hot Pink
        backgroundColor: 'rgba(255, 192, 203, 0.5)', // Light Pink
        fill: true,
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Progress Tracking</h2>
      <Line data={data} />
    </div>
  );
};

export default ProgressChart;

import React, { useState, useEffect } from 'react';

const ProgressTracking = () => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    if (savedWorkouts.length > 0) {
      const progressData = savedWorkouts.map((workout, index) => ({
        id: index + 1,
        label: workout.timestamp,
        weightLifted: workout.weight * workout.sets * workout.reps,
      }));
      setProgressData(progressData);
    }
  }, []);

  const maxWeightLifted = Math.max(...progressData.map((data) => data.weightLifted), 0);

  return (
    <div className="p-8 bg-primary text-secondary rounded-lg shadow max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Progress Tracking</h1>
      <div className="relative w-full h-60 bg-muted border rounded">
        {progressData.map((data, index) => (
          <div
            key={data.id}
            className="absolute bottom-0 bg-accent text-center"
            style={{
              left: `${(index / progressData.length) * 100}%`,
              width: '4%',
              height: `${(data.weightLifted / maxWeightLifted) * 100}%`,
            }}
          >
            <span className="text-xs text-white">{data.weightLifted} kg</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracking;

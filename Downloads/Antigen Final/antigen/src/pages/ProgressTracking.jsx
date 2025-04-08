import React, { useState, useEffect } from 'react';

const ProgressTracking = () => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    if (savedWorkouts.length > 0) {
      const formattedData = savedWorkouts.map((workout, index) => ({
        id: index + 1,
        label: workout.timestamp || `Workout ${index + 1}`,
        weightLifted:
          workout.weight && workout.sets && workout.reps
            ? workout.weight * workout.sets * workout.reps
            : 0, // Default to 0 if any value is missing
      }));
      setProgressData(formattedData);
    }
  }, []);

  const maxWeightLifted = Math.max(...progressData.map((data) => data.weightLifted), 1); // Prevent divide by zero

  return (
    <div className="p-8 bg-primary text-secondary rounded-lg shadow max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Progress Tracking</h1>
      
      {progressData.length > 0 ? (
        <div className="relative w-full h-60 bg-light-gray border rounded flex items-end">
          {progressData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center mx-2"
              style={{ width: '4%' }}
            >
              <div
                className="bg-accent rounded"
                style={{
                  height: `${(data.weightLifted / maxWeightLifted) * 100}%`,
                  width: '100%',
                }}
                title={`Weight Lifted: ${data.weightLifted} kg`} // Tooltip for weight info
              ></div>
              <span className="text-sm text-secondary mt-1">{data.weightLifted} kg</span>
              <span className="text-xs text-muted mt-1 truncate">{data.label}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">No workout data available. Start logging your workouts to see progress!</p>
      )}
    </div>
  );
};

export default ProgressTracking;

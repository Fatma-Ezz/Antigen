import React, { useState, useEffect } from 'react';

const WorkoutHistory = () => {
  const [workouts, setWorkouts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    setWorkouts(savedWorkouts);
  }, []);

  const filteredWorkouts = workouts.filter((workout) =>
    workout.exercise.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-primary text-secondary rounded-lg max-w-7xl mx-auto shadow">
      <h1 className="text-3xl font-bold mb-6 text-center">Workout History</h1>
      <input
        type="text"
        placeholder="Search workouts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded bg-secondary text-primary mb-4"
      />
      <div className="space-y-4">
        {filteredWorkouts.map((workout, index) => (
          <div key={index} className="p-4 bg-secondary text-primary rounded shadow">
            <h3 className="text-xl font-bold">{workout.exercise}</h3>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
            <p>Weight: {workout.weight} kg</p>
            <p className="text-sm text-muted">Logged on: {workout.timestamp}</p>
          </div>
        ))}
        {filteredWorkouts.length === 0 && (
          <p className="text-center text-muted">No workouts found!</p>
        )}
      </div>
    </div>
  );
};

export default WorkoutHistory;

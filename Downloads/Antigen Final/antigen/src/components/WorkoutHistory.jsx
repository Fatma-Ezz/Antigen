import React, { useState } from 'react';

const WorkoutHistory = () => {
  const [workouts, setWorkouts] = useState([
    {
      id: 1,
      date: '2025-04-01',
      exercises: [
        { name: 'Push-Up', sets: 3, reps: 12 },
        { name: 'Squat', sets: 4, reps: 15 },
      ],
    },
  ]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Workout History</h2>
      {workouts.map((workout) => (
        <div key={workout.id} className="mb-4">
          <h3 className="text-lg font-bold">{workout.date}</h3>
          <ul>
            {workout.exercises.map((exercise, index) => (
              <li key={index}>
                {exercise.name}: {exercise.sets} sets x {exercise.reps} reps
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkoutHistory;

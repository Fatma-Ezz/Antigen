import React, { useState, useEffect } from 'react';

const WorkoutLog = () => {
  const [formData, setFormData] = useState({ exercise: '', sets: '', reps: '', weight: '' });
  const [workouts, setWorkouts] = useState([]);

  // Load workouts from localStorage
  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    setWorkouts(savedWorkouts);
  }, []);

  // Save workouts to localStorage
  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = { ...formData, timestamp: new Date().toLocaleString() };
    setWorkouts((prev) => [...prev, newWorkout]);
    setFormData({ exercise: '', sets: '', reps: '', weight: '' });
  };

  return (
    <div className="p-8 bg-primary text-secondary rounded-lg max-w-7xl mx-auto shadow">
      <h1 className="text-3xl font-bold mb-6 text-center">Log Your Workouts</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="exercise"
          value={formData.exercise}
          onChange={handleChange}
          placeholder="Exercise"
          className="w-full p-3 rounded bg-secondary text-primary focus:ring-2 focus:ring-accent"
          required
        />
        <input
          type="number"
          name="sets"
          value={formData.sets}
          onChange={handleChange}
          placeholder="Sets"
          className="w-full p-3 rounded bg-secondary text-primary focus:ring-2 focus:ring-accent"
          required
        />
        <input
          type="number"
          name="reps"
          value={formData.reps}
          onChange={handleChange}
          placeholder="Reps"
          className="w-full p-3 rounded bg-secondary text-primary focus:ring-2 focus:ring-accent"
          required
        />
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Weight (kg)"
          className="w-full p-3 rounded bg-secondary text-primary focus:ring-2 focus:ring-accent"
          required
        />
        <button
          className="w-full py-3 bg-accent text-secondary rounded hover:bg-secondary hover:text-accent transition"
        >
          Add Workout
        </button>
      </form>
    </div>
  );
};

export default WorkoutLog;

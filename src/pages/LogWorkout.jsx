import { useState } from "react";

const LogWorkout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const handleAddWorkout = () => {
    if (exercise && sets && reps && weight) {
      setWorkouts([...workouts, { exercise, sets, reps, weight, date: new Date().toLocaleDateString() }]);
      setExercise("");
      setSets("");
      setReps("");
      setWeight("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Log Your Workout</h1>
      <input type="text" placeholder="Exercise" value={exercise} onChange={(e) => setExercise(e.target.value)} className="border p-2 m-2" />
      <input type="number" placeholder="Sets" value={sets} onChange={(e) => setSets(e.target.value)} className="border p-2 m-2" />
      <input type="number" placeholder="Reps" value={reps} onChange={(e) => setReps(e.target.value)} className="border p-2 m-2" />
      <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} className="border p-2 m-2" />
      <button onClick={handleAddWorkout} className="bg-blue-500 text-white p-2 rounded">Add Workout</button>
      <ul>{workouts.map((w, i) => (<li key={i}>{w.date} - {w.exercise}: {w.sets} sets x {w.reps} reps @ {w.weight} kg</li>))}</ul>
    </div>
  );
};

export default LogWorkout;

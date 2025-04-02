import { useState, useEffect } from "react";
import axios from "axios";

const Workouts = () => {
  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://wger.de/api/v2/exercise/")
      .then((response) => setExercises(response.data.results))
      .catch((error) => console.error("Error fetching exercises", error));
  }, []);

  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Exercise List</h1>
      <input
        type="text"
        placeholder="Search exercises..."
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2"
      />
      <ul>
        {filteredExercises.length > 0 ? (
          filteredExercises.map((exercise) => (
            <li key={exercise.id} className="mt-2">{exercise.name}</li>
          ))
        ) : (
          <p>No exercises found</p>
        )}
      </ul>
    </div>
  );
};

export default Workouts;

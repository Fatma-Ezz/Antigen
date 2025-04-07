import React, { useState } from 'react';

const SearchBar = ({ exercises }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  // Handle search input changes
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter exercises based on the search term
    const filtered = exercises.filter((exercise) =>
      exercise.name.toLowerCase().includes(term)
    );
    setFilteredExercises(filtered);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search exercises by letter..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 border rounded w-full mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredExercises.length > 0 ? (
          filteredExercises.map((exercise) => (
            <div key={exercise.id} className="text-center">
              <h3 className="text-lg font-bold">{exercise.name}</h3>
              <p>{exercise.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500">No exercises found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

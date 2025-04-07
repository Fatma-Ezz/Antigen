import React, { useState } from 'react';

const Workouts = () => {
  const workoutCategories = [
    {
      category: 'Glutes + Legs',
      workouts: [
        {
          name: 'Hip Thrusts - 3 sets of 12 reps',
          img: '/assets/hip-thrusts.jpg',
        },
        {
          name: 'Squats - 3 sets of 12 reps',
          img: '/assets/squats.jpg',
        },
      ],
    },
    {
      category: 'Waist + Hips',
      workouts: [
        {
          name: 'Side Plank Hip Dips - 3 sets of 15 reps',
          img: '/assets/side-plank-hip-dips.jpg',
        },
        {
          name: 'Russian Twists - 3 sets of 15 reps',
          img: '/assets/russian-twists.jpg',
        },
      ],
    },
    {
      category: 'Full Body Strength',
      workouts: [
        {
          name: 'Deadlifts - 3 sets of 10 reps',
          img: '/assets/deadlifts.jpg',
        },
        {
          name: 'Push-ups - 3 sets of 15 reps',
          img: '/assets/push-ups.jpg',
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  return (
    <div className="p-8 bg-primary text-secondary">
      <h1 className="text-3xl font-bold text-center mb-6">Explore Workouts</h1>
      <div className="space-y-4">
        {workoutCategories.map((category, index) => (
          <div key={index} className="border-b border-muted pb-4">
            <button
              onClick={() => toggleCategory(category.category)}
              className="w-full text-left py-3 px-6 bg-highlight rounded text-secondary font-bold hover:bg-secondary hover:text-highlight"
            >
              {category.category}
            </button>
            {activeCategory === category.category && (
              <ul className="mt-4 pl-5 space-y-2">
                {category.workouts.map((workout, wIndex) => (
                  <li key={wIndex} className="flex items-center space-x-4">
                    <img
                      src={workout.img}
                      alt={workout.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="text-lg">{workout.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;

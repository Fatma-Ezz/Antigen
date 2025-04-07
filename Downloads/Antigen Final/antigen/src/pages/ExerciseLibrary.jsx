import React from 'react';

const ExerciseLibrary = () => {
  const categories = [
    {
      title: 'Glutes + Legs',
      exercises: [
        { name: 'Hip Thrusts - 3 sets of 12 reps', img: '/assets/hip-thrusts.jpg', link: 'https://youtube.com/shorts/uUuPYcK9SJI?si=rMASZtMpoFMIxSIg' },
        { name: 'Squats - 3 sets of 12 reps', img: '/assets/squats.jpg', link: 'https://youtube.com/shorts/0gNqaP5B818?si=ENXP4Z-iQJH-t0rx' },
        { name: 'Lunges - 3 sets of 10 reps per leg', img: '/assets/lunges.jpg', link: 'https://youtube.com/shorts/JcJ_eBVlY70?si=ukBBXVkP0-Bo2lFU' },
        { name: 'Glute Bridges - 3 sets of 15 reps', img: '/assets/glute-bridges.jpg', link: 'https://youtube.com/shorts/2-47T-U82KU?si=OAb9mAtXrODsdtXI' },
      ],
    },
    {
      title: 'Waist + Hips',
      exercises: [
        { name: 'Side Plank Hip Dips - 3 sets of 15 reps', img: '/assets/side-plank-hip-dips.jpg', link: 'https://youtube.com/shorts/T6KHGR4MLyE?si=FNaOU7o7Ns3TZm8X' },
        { name: 'Hip Thrusts - 3 sets of 12 reps', img: '/assets/hip-thrusts.jpg', link: 'https://youtube.com/shorts/uUuPYcK9SJI?si=rMASZtMpoFMIxSIg' },
        { name: 'Russian Twists - 3 sets of 15 reps', img: '/assets/russian-twists.jpg', link: 'https://youtube.com/shorts/C3RauLi8FNw?si=YKDRlObIrXmhrnIb' },
      ],
    },
    {
      title: 'Full Body Strength',
      exercises: [
        { name: 'Deadlifts - 3 sets of 10 reps', img: '/assets/deadlifts.jpg', link: 'https://youtube.com/shorts/_TchJLlBO-4?si=QpENhkS-G39ZMR-w' },
        { name: 'Bench Press - 3 sets of 12 reps', img: '/assets/bench-press.jpg', link: 'https://youtube.com/shorts/_FkbD0FhgVE?si=CKgsz6Dr7MlhJbCE' },
        { name: 'Pull-Ups - 3 sets of 8 reps', img: '/assets/pull-ups.jpg', link: 'https://youtube.com/shorts/eDP_OOhMTZ4?si=lZvzsagvWZ6lzkye' },
        { name: 'Squats - 3 sets of 12 reps', img: '/assets/squats.jpg', link: 'https://youtube.com/shorts/0gNqaP5B818?si=ENXP4Z-iQJH-t0rx' },
      ],
    },
  ];

  return (
    <div className="p-8 bg-primary text-secondary rounded-lg max-w-7xl mx-auto shadow">
      <h1 className="text-3xl font-bold mb-8 text-center">Exercise Categories</h1>
      <div className="space-y-8">
        {categories.map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.exercises.map((exercise, idx) => (
                <div key={idx} className="p-4 bg-secondary text-primary rounded shadow hover:shadow-lg transition-shadow">
                  <img
                    src={exercise.img}
                    alt={exercise.name}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h3 className="font-bold text-lg mb-2">{exercise.name}</h3>
                  <a
                    href={exercise.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-medium hover:underline"
                  >
                    Watch Video
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseLibrary;

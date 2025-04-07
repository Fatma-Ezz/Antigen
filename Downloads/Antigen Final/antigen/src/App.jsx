import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md"; // React icons
import Home from './pages/Home';
import WorkoutLog from './pages/WorkoutLog';
import WorkoutHistory from './pages/WorkoutHistory';
import ProgressTracking from './pages/ProgressTracking';
import ExerciseLibrary from './pages/ExerciseLibrary';
import Diet from './pages/Diet';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`${darkMode ? 'dark' : ''} flex flex-col min-h-screen`}>
        {/* Navigation Bar */}
        <nav className="bg-navbar text-secondary py-4 px-8 fixed top-0 w-full shadow-md">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <span className="text-2xl font-bold">Antigen</span>
            <div className="flex space-x-6 items-center">
              <Link to="/" className="px-4 py-2 rounded">Home</Link>
              <Link to="/workout-log" className="px-4 py-2 rounded">Log Workouts</Link>
              <Link to="/workout-history" className="px-4 py-2 rounded">Workout History</Link>
              <Link to="/progress-tracking" className="px-4 py-2 rounded">Progress Tracking</Link>
              <Link to="/exercise-library" className="px-4 py-2 rounded">Exercise Library</Link>
              <Link to="/diet" className="px-4 py-2 rounded">Diet</Link>
              {/* Dark Mode Button */}
              <button onClick={toggleDarkMode} className="text-secondary text-2xl px-4 py-2 rounded">
                {darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
              </button>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="flex-grow pt-20 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workout-log" element={<WorkoutLog />} />
            <Route path="/workout-history" element={<WorkoutHistory />} />
            <Route path="/progress-tracking" element={<ProgressTracking />} />
            <Route path="/exercise-library" element={<ExerciseLibrary />} />
            <Route path="/diet" element={<Diet />} />
          </Routes>
        </div>

      
      </div>
    </Router>
  );
}

export default App;


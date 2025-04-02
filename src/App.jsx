import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts.jsx";
import LogWorkout from "./pages/LogWorkout";
import Diet from "./pages/Diet";
import Login from "./pages/Login";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/log-workout" element={<LogWorkout />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

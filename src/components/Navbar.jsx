import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between text-white">
      <h1 className="text-xl font-bold">Antigen</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/log-workout">Log Workout</Link>
        <Link to="/diet">Diet</Link>
        <Link to="/login">Login</Link>
      </div>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;


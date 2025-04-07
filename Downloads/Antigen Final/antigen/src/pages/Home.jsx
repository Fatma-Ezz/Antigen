import React, { useState, useEffect } from 'react';

const Home = () => {
  const [greeting, setGreeting] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const firstName = email.split('@')[0];
    setGreeting(`Good ${greeting.split(' ')[1]}, ${firstName}`);
    setLoggedIn(true);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-center bg-cover text-secondary" style={{ backgroundImage: "url('/assets/backgroundfinal.png')" }}>
      {!loggedIn ? (
        <div className="bg-primary p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-4xl font-bold text-center mb-6">Welcome Back</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded bg-secondary text-primary focus:ring-2 focus:ring-accent"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded bg-secondary text-primary focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="w-full py-3 bg-accent text-secondary font-bold rounded hover:bg-secondary hover:text-accent transition"
            >
              LOGIN
            </button>
          </form>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">{greeting}!</h1>
          <p className="text-lg italic">Don’t shrink yourself to fit into anything. Get stronger and grow into everything.</p>
        </div>
      )}
    </div>
  );
};

export default Home;

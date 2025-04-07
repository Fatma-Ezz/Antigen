import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    alert(`Welcome back, ${email}!`);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <form
        onSubmit={handleLogin}
        className="max-w-md mx-auto bg-lightPink p-6 rounded shadow text-white"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-bold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-bold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="p-2 w-full border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="p-2 bg-hotPink text-white rounded w-full font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

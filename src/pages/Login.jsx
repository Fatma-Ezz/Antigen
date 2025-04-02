import { useState } from "react";
function Login() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Login</h1>
      <input type="text" placeholder="Username" className="border p-2 rounded" />
      <input type="password" placeholder="Password" className="border p-2 rounded mt-2" />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">Login</button>
    </div>
  );
}

export default Login;

// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthApi from "../api/AuthApi";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await AuthApi.loginUser(email, password);
      // Redirect based on role
      if (user.role === "admin") navigate("/admin");
      else navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await AuthApi.loginWithGoogle();
      if (user.role === "admin") navigate("/admin");
      else navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-800">
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
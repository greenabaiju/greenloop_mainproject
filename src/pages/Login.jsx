
import React from "react";
import { Link } from "react-router-dom";

const Login=()=> {
  return (
    <div className="min-h-screen bg-[#f5f9ed] flex items-center justify-center p-5">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-[#13382f] text-center">
          GreenLoop
        </h1>

        <h2 className="text-xl font-bold text-center mt-6">
          Login
        </h2>

        <form className="mt-6">

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full border p-3 rounded-lg mt-2 mb-4"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border p-3 rounded-lg mt-2 mb-5"
          />

          <button className="w-full bg-[#b7fe02] p-3 rounded-lg font-bold">
            Login
          </button>

        </form>

        <p className="text-center mt-5 text-sm">
          Don't have an account?
          <Link to="/register" className="text-green-800 font-bold ml-1">
            Register
          </Link>
        </p>

        <Link to="/" className="block text-center mt-4 text-sm text-gray-500">
          Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Login;


import React from "react";
import { Link } from "react-router-dom";

const Register=()=> {
  return (
    <div className="min-h-screen bg-[#f5f9ed] flex items-center justify-center p-5">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-[#13382f] text-center">
          GreenLoop
        </h1>

        <h2 className="text-xl font-bold text-center mt-6">
          Create Account
        </h2>

        <form className="mt-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <select className="w-full border p-3 rounded-lg mb-4">
            <option value="">Select Role</option>
            <option value="household">Household</option>
            <option value="collector">Waste Collector</option>
            <option value="recycling-center">Recycling Centre</option>
          </select>

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border p-3 rounded-lg mb-5"
          />

          <button className="w-full bg-[#b7fe02] p-3 rounded-lg font-bold">
            Register
          </button>

        </form>

        <p className="text-center mt-5 text-sm">
          Already have an account?
          <Link to="/login" className="text-green-800 font-bold ml-1">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;

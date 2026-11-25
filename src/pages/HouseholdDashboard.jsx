import React from "react";
import { Link } from "react-router-dom";

const HouseholdDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f5f9ed]">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-[#13382f]">
          Welcome, Household!
        </h2>

        <p className="text-gray-600 mt-2">
          Manage your waste collection and recycling activities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Total Collections</h3>
            <p className="text-3xl font-bold mt-3">12</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Waste Collected</h3>
            <p className="text-3xl font-bold mt-3">25 KG</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Eco Points</h3>
            <p className="text-3xl font-bold text-green-600 mt-3">250</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Payment Status</h3>
            <p className="text-xl font-bold text-green-600 mt-3">Paid</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#13382f] mt-10 mb-5">
          Collection Schedule
        </h2>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">Next Waste Collection</h3>

          <p className="text-gray-600 mt-3">Date: 28 November 2026</p>

          <p className="text-gray-600 mt-2">Time: 9:00 AM</p>

          <p className="text-gray-600 mt-2">Collector: Arun Kumar</p>

          <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg mt-4">
            Scheduled
          </span>
        </div>

        {/* Actions */}
        <h2 className="text-2xl font-bold text-[#13382f] mt-10 mb-5">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Report Missed Collection</h3>
            <p className="text-gray-500 mt-2">
              Report if your scheduled waste collection was missed.
            </p>
            <button className="bg-[#b7fe02] px-5 py-2 rounded-lg mt-4">
              Report Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Payment Details</h3>
            <p className="text-gray-500 mt-2">
              View your waste collection payment details.
            </p>
            <button className="bg-[#b7fe02] px-5 py-2 rounded-lg mt-4">
              View Payments
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Collection History</h3>
            <p className="text-gray-500 mt-2">
              Check your previous waste collection records.
            </p>
            <button className="bg-[#b7fe02] px-5 py-2 rounded-lg mt-4">
              View History
            </button>
          </div>
        </div>

        {/* Eco Points */}
        <div className="bg-[#13382f] text-white p-8 rounded-xl mt-10">
          <h2 className="text-2xl font-bold text-[#b7fe02]">
            Keep Your Community Green!
          </h2>

          <p className="mt-3 text-gray-200">
            You have earned 250 Eco Points through responsible waste management.
            Keep recycling and earn more rewards!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HouseholdDashboard;

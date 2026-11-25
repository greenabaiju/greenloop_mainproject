import React from "react";
import { Link } from "react-router-dom";

const CollectorDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f5f9ed]">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-[#13382f]">
          Welcome, Collector!
        </h2>

        <p className="text-gray-600 mt-2">
          Manage your daily waste collection activities.
        </p>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Assigned Households</h3>
            <p className="text-3xl font-bold mt-3">30</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Today's Collections</h3>
            <p className="text-3xl font-bold mt-3">15</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Completed</h3>
            <p className="text-3xl font-bold text-green-600 mt-3">10</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Pending</h3>
            <p className="text-3xl font-bold text-yellow-600 mt-3">5</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#13382f] mt-10 mb-5">
          Today's Collection Schedule
        </h2>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#13382f] text-white">
              <tr>
                <th className="p-4">Household</th>
                <th className="p-4">Address</th>
                <th className="p-4">Time</th>
                <th className="p-4">Waste Type</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4">Arun Kumar</td>
                <td className="p-4">Green Street</td>
                <td className="p-4">9:00 AM</td>
                <td className="p-4">Plastic</td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    Pending
                  </span>
                </td>
                <td className="p-4">
                  <button className="bg-green-600 text-white px-3 py-2 rounded-lg">
                    Complete
                  </button>
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Anjali</td>
                <td className="p-4">Rose Garden</td>
                <td className="p-4">10:00 AM</td>
                <td className="p-4">Plastic</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    Completed
                  </span>
                </td>
                <td className="p-4 text-green-600">Done</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Rahul</td>
                <td className="p-4">Main Road</td>
                <td className="p-4">11:00 AM</td>
                <td className="p-4">Plastic</td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    Pending
                  </span>
                </td>
                <td className="p-4">
                  <button className="bg-green-600 text-white px-3 py-2 rounded-lg">
                    Complete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-[#13382f] mt-10 mb-5">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Collection History</h3>
            <p className="text-gray-500 mt-2">
              View your completed waste collections.
            </p>
            <button className="bg-[#b7fe02] px-5 py-2 rounded-lg mt-4">
              View History
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Report Issue</h3>
            <p className="text-gray-500 mt-2">
              Report missed collections or other problems.
            </p>
            <button className="bg-[#b7fe02] px-5 py-2 rounded-lg mt-4">
              Report Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Payment Details</h3>
            <p className="text-gray-500 mt-2">
              Check your collection payment details.
            </p>
            <button className="bg-[#b7fe02] px-5 py-2 rounded-lg mt-4">
              View Payments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectorDashboard;

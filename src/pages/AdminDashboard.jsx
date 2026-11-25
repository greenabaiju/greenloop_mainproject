import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f5f9ed]">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-[#13382f]">Admin Dashboard</h2>

        <p className="text-gray-600 mt-2">Welcome to GreenLoop Admin Panel.</p>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Total Households</h3>
            <p className="text-3xl font-bold mt-3">120</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Total Collectors</h3>
            <p className="text-3xl font-bold mt-3">25</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Total Collections</h3>
            <p className="text-3xl font-bold mt-3">350</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Recycling Centres</h3>
            <p className="text-3xl font-bold mt-3">8</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#13382f] mt-10 mb-5">
          Management
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Households</h3>
            <p className="text-gray-500 mt-2">Manage registered households.</p>
            <button className="bg-[#b7fe02] px-5 py-2 rounded-lg mt-4">
              View Households
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Collectors</h3>
            <p className="text-gray-500 mt-2">Manage waste collectors.</p>
            <button className="bg-[#b7fe02] px-5 py-2 rounded-lg mt-4">
              View Collectors
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Recycling Centres</h3>
            <p className="text-gray-500 mt-2">Manage recycling centres.</p>
            <button className="bg-[#b7fe02] px-5 py-2 rounded-lg mt-4">
              View Centres
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#13382f] mt-10 mb-5">
          Registration Approval
        </h2>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <h3 className="text-xl font-bold p-5 text-[#13382f]">
            New Registration Requests
          </h3>

          <table className="w-full text-left">
            <thead className="bg-[#13382f] text-white">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4">Arun Kumar</td>
                <td className="p-4">arun@gmail.com</td>
                <td className="p-4">Household</td>
                <td className="p-4">25-11-2026</td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    Pending
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="bg-green-600 text-white px-3 py-2 rounded-lg">
                      Approve
                    </button>

                    <button className="bg-red-500 text-white px-3 py-2 rounded-lg">
                      Reject
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Rahul</td>
                <td className="p-4">rahul@gmail.com</td>
                <td className="p-4">Waste Collector</td>
                <td className="p-4">24-11-2026</td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    Pending
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="bg-green-600 text-white px-3 py-2 rounded-lg">
                      Approve
                    </button>

                    <button className="bg-red-500 text-white px-3 py-2 rounded-lg">
                      Reject
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Anjali</td>
                <td className="p-4">anjali@gmail.com</td>
                <td className="p-4">Recycling Centre</td>
                <td className="p-4">23-11-2026</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    Approved
                  </span>
                </td>
                <td className="p-4 text-green-600">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

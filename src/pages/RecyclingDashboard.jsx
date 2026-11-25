
import {
  LuRecycle,
  LuWeight,
  LuPackage,
  LuCircleCheck,
  LuLogOut,
} from "react-icons/lu";
import { Link } from "react-router-dom";

const RecyclingDashboard=()=> {
  return (
    <div className="min-h-screen bg-[#f5f9ed]">

      <header className="flex items-center justify-between bg-[#13382f] px-6 py-4 text-white">
        <h1 className="text-xl font-bold">GreenLoop</h1>

        <div className="flex items-center gap-4">
          <span>Recycling Centre</span>
          <Link to="/login" className="flex items-center gap-2 text-sm">
            <LuLogOut />
            Logout
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8">

        <h2 className="text-2xl font-bold text-[#101604]">
          Recycling Dashboard
        </h2>

        <p className="mt-2 text-gray-600">
          Manage and track your recycling activities.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <LuPackage size={30} className="text-[#47733d]" />
            <p className="mt-4 text-gray-500">Received Waste</p>
            <h3 className="mt-2 text-2xl font-bold">250 kg</h3>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <LuRecycle size={30} className="text-[#47733d]" />
            <p className="mt-4 text-gray-500">Processed Waste</p>
            <h3 className="mt-2 text-2xl font-bold">180 kg</h3>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <LuWeight size={30} className="text-[#47733d]" />
            <p className="mt-4 text-gray-500">Pending Waste</p>
            <h3 className="mt-2 text-2xl font-bold">70 kg</h3>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <LuCircleCheck size={30} className="text-[#47733d]" />
            <p className="mt-4 text-gray-500">Completed Batches</p>
            <h3 className="mt-2 text-2xl font-bold">24</h3>
          </div>

        </div>

        <div className="mt-10 rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold">Recent Recycling Records</h3>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f5f9ed]">
                <tr>
                  <th className="p-3">Batch ID</th>
                  <th className="p-3">Waste Type</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-3">B001</td>
                  <td className="p-3">Plastic Bottles</td>
                  <td className="p-3">50 kg</td>
                  <td className="p-3">25 Nov 2026</td>
                  <td className="p-3 text-green-700">Processed</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3">B002</td>
                  <td className="p-3">Plastic Bags</td>
                  <td className="p-3">30 kg</td>
                  <td className="p-3">24 Nov 2026</td>
                  <td className="p-3 text-orange-600">Pending</td>
                </tr>

                <tr>
                  <td className="p-3">B003</td>
                  <td className="p-3">Mixed Plastic</td>
                  <td className="p-3">40 kg</td>
                  <td className="p-3">23 Nov 2026</td>
                  <td className="p-3 text-green-700">Processed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold">Recycling Centre Information</h3>
          <p className="mt-4 text-gray-600">
            Centre Name: GreenLoop Recycling Centre
          </p>
          <p className="mt-2 text-gray-600">Location: Trivandrum</p>
          <p className="mt-2 text-gray-600">Status: Active</p>
        </div>

      </main>
    </div>
  );
}

export default RecyclingDashboard;

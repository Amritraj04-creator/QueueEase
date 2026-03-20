function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Welcome */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold">
          Welcome 👋
        </h1>
        <p className="text-gray-600 mt-2">
          Book your first appointment and skip the queue.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

        <button className="bg-blue-500 text-white p-4 rounded-lg">
          Book Appointment
        </button>

        <button className="bg-green-500 text-white p-4 rounded-lg">
          Find Clinics
        </button>

        <button className="bg-purple-500 text-white p-4 rounded-lg">
          My Bookings
        </button>

        <button className="bg-orange-500 text-white p-4 rounded-lg">
          Nearby Clinics
        </button>

      </div>

      {/* Queue Status */}
      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h2 className="text-xl font-semibold">
          Queue Status
        </h2>
        <p className="text-gray-500 mt-2">
          No active bookings yet.
        </p>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h2 className="text-xl font-semibold">
          Recent Activity
        </h2>
        <p className="text-gray-500 mt-2">
          No recent activity.
        </p>
      </div>

    </div>
  );
}

export default Dashboard;
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { MapPin, Calendar, Heart, LogOut } from "lucide-react";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(true);

  // 🔐 Protect route
  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  // 📦 Fetch user bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("/api/bookings", {
          headers: {
            Authorization: `Bearer ${user.token}`, // 🔥 TOKEN
          },
        });

        setBookings(res.data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoadingBookings(false);
      }
    };

    if (user) fetchBookings();
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome, {user?.name || "Traveler"} ✈️
          </h1>
          <p className="text-gray-600">
            Manage your trips, bookings and saved destinations here.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          {/* Upcoming Trips */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center space-x-3 mb-3">
              <Calendar className="text-blue-600" />
              <h2 className="font-semibold text-lg">Upcoming Trips</h2>
            </div>
            <p className="text-gray-500 text-sm">
              {bookings.length} trip(s) planned
            </p>
          </div>

          {/* Saved Destinations */}
          <div
            onClick={() => navigate("/favourites")}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center space-x-3 mb-3">
              <Heart className="text-pink-500" />
              <h2 className="font-semibold text-lg">Saved Places</h2>
            </div>
            <p className="text-gray-500 text-sm">
              View your favourite destinations.
            </p>
          </div>

          {/* Explore */}
          <div
            onClick={() => navigate("/destinations")}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center space-x-3 mb-3">
              <MapPin className="text-green-600" />
              <h2 className="font-semibold text-lg">Explore</h2>
            </div>
            <p className="text-gray-500 text-sm">
              Discover new destinations.
            </p>
          </div>

        </div>

        {/* 📦 BOOKINGS SECTION */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>

          {loadingBookings ? (
            <p>Loading bookings...</p>
          ) : bookings.length === 0 ? (
            <p className="text-gray-500">No bookings found.</p>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="border p-4 rounded-lg flex justify-between items-center hover:shadow-sm transition"
                >
                  <div>
                    <p className="font-medium text-lg">
                      {booking.destination}
                    </p>
                    <p className="text-sm text-gray-500">
                      Budget: {booking.budget}
                    </p>
                    <p className="text-sm text-gray-500">
                      Contact: {booking.contactMode}
                    </p>
                  </div>

                  <span className="text-xs text-gray-400">
                    {new Date(booking.createdAt).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Logout Button */}
        <div className="mt-10">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
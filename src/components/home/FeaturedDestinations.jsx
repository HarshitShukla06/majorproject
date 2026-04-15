import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../common/Card";
import { MapPin, Star } from "lucide-react";
import api from "../../services/api"; // ✅ use axios instance

const FeaturedDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetchFeatured();
  }, []);

  const fetchFeatured = async () => {
    try {
      // ✅ CALL NEW BACKEND API
      const res = await api.get("/destinations/featured");
      const data = res.data;

      if (!data || data.length === 0) return;

      const formatted = data.map((dest) => ({
        id: dest._id,
        name: dest.name,
        image: `http://localhost:5000${dest.image}`,
        rating: dest.rating || 4.5,
        reviews: dest.reviews || 1000,
        price: dest.price || 10000,
        description: dest.description,
        state: dest.state || dest.location || "India",
      }));

      setDestinations(formatted);
    } catch (error) {
      console.error("Error fetching featured destinations:", error);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular destinations handpicked by travel experts
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Link key={destination.id} to={`/destinations/${destination.id}`}>
              <Card hover={true}>

                {/* Image */}
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600 shadow-lg">
                    ₹{destination.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">

                  {/* Title + Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {destination.name}
                    </h3>

                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="text-sm font-medium text-gray-700">
                        {destination.rating}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">
                      {destination.reviews.toLocaleString()} reviews
                    </span>

                    <div className="flex items-center gap-1 text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs">
                        {destination.state}
                      </span>
                    </div>
                  </div>

                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <Link
            to="/destinations"
            className="btn-primary inline-block px-8 py-4 text-lg font-semibold"
          >
            View All Destinations
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedDestinations;
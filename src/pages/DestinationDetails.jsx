import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  Star,
  Heart,
  Calendar,
  Users,
  Clock,
  Wifi,
  Coffee,
  Car,
  Home,
  Check,
  ArrowLeft,
  Share2,
  Sun,
} from "lucide-react";
import Button from "../components/common/Button";
import Card from "../components/common/Card";

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    fetchDestinationDetails();
  }, [id]);

  const fetchDestinationDetails = async () => {
    try {
      setLoading(true);

      // ✅ Fetch from YOUR backend
      const response = await fetch(
        `http://localhost:5000/api/destinations/${id}`
      );
      const data = await response.json();

      if (!data) {
        setDestination(null);
        return;
      }

      // ✅ Format DB data for UI
      const formatted = {
        id: data._id,
        name: data.name,
        country: "India",
        location: data.location,

        // Image from public/images
        images: [
          `http://localhost:5000${data.image}`,
          `http://localhost:5000${data.image}`,
          `http://localhost:5000${data.image}`,
        ],

        rating: data.rating || 4.5,
        reviews: 1200,
        price: 12000,
        duration: 5,

        description: data.description,
        longDescription:
          data.description +
          " This destination is known for its beauty, culture, and amazing travel experiences.",

        category: [data.category || "Travel"],

        highlights: [
          `Explore ${data.name}`,
          "Beautiful landscapes",
          "Popular tourist attractions",
          "Local food experience",
          "Cultural heritage",
        ],

        included: ["Hotel stay", "Breakfast", "Transport", "Sightseeing"],
        notIncluded: ["Flights", "Personal expenses"],

        itinerary: [
          {
            day: 1,
            title: "Arrival & Exploration",
            activities: ["Check-in", "Local sightseeing"],
          },
          {
            day: 2,
            title: "Full Day Tour",
            activities: ["Visit famous places", "Enjoy activities"],
          },
        ],

        amenities: [
          { icon: <Wifi className="w-5 h-5" />, name: "Free WiFi" },
          { icon: <Coffee className="w-5 h-5" />, name: "Breakfast" },
          { icon: <Car className="w-5 h-5" />, name: "Transport" },
          { icon: <Home className="w-5 h-5" />, name: "Hotel Stay" },
        ],

        weather: {
          season: "Pleasant",
          temperature: "20-30°C",
          conditions: "Clear",
        },

        bestTimeToVisit: "October to March",
        languages: ["Hindi", "English"],
        currency: "INR",
        timezone: "IST",
      };

      setDestination(formatted);
    } catch (error) {
      console.error("Error fetching destination:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = () => {
    navigate(`/booking/${id}`);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: destination.name,
        text: destination.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  // ================= UI =================

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading destination...</p>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="text-center mt-20">
        <h2>Destination not found</h2>
        <Button onClick={() => navigate("/destinations")}>
          Back
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Back */}
      <div className="p-4">
        <button onClick={() => navigate("/destinations")}>
          <ArrowLeft /> Back
        </button>
      </div>

      {/* Image */}
      <img
        src={destination.images[selectedImage]}
        className="w-full h-96 object-cover"
        alt={destination.name}
      />

      <div className="p-6">

        {/* Title */}
        <h1 className="text-3xl font-bold">{destination.name}</h1>
        <p className="text-gray-500 flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {destination.location}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <Star className="text-yellow-500" />
          <span>{destination.rating}</span>
        </div>

        {/* Description */}
        <p className="mt-4">{destination.description}</p>

        {/* Price */}
        <h2 className="text-2xl mt-4 text-blue-600">
          ₹{destination.price}
        </h2>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <Button onClick={handleBooking}>Book Now</Button>
          <Button onClick={toggleFavorite}>
            <Heart />
          </Button>
          <Button onClick={handleShare}>
            <Share2 />
          </Button>
        </div>

      </div>
    </div>
  );
};

export default DestinationDetails;
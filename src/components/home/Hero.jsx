import SearchBar from "../common/SearchBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    destinations: 0,
    travelers: 0,
    rating: 0,
    support: 0,
  });

  // Background images array
  const bgImages = [
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920",
  ];

  const [currentBg, setCurrentBg] = useState(0);
  const [fade, setFade] = useState(false);

  // Change images every 4 seconds with white fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // show white overlay

      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % bgImages.length);
        setFade(false); // remove white overlay
      }, 700); // white fade duration
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Animate counters (UNCHANGED)
  useEffect(() => {
    const destinationsTarget = 500;
    const travelersTarget = 50000;
    const ratingTarget = 49;
    const supportTarget = 24;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setStats({
        destinations: Math.min(destinationsTarget, Math.floor(destinationsTarget * step / 50)),
        travelers: Math.min(travelersTarget, Math.floor(travelersTarget * step / 50)),
        rating: Math.min(ratingTarget, Math.floor(ratingTarget * step / 50)),
        support: Math.min(supportTarget, Math.floor(supportTarget * step / 50)),
      });
      if (step >= 50) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (searchData) => {
    const queryParams = new URLSearchParams({
      destination: searchData.destination,
      startDate: searchData.startDate,
      endDate: searchData.endDate,
      guests: searchData.guests,
    }).toString();

    navigate(`/destinations?${queryParams}`);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden transition-all duration-1000 p-6 md:p-12 rounded-3xl">

      {/* Background Section */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">

        {/* Background Image */}
        <div
          key={currentBg}
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105"
          style={{ backgroundImage: `url(${bgImages[currentBg]})` }}
        />

        {/* White Cinematic Fade Overlay */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-700 ${
            fade ? "opacity-80" : "opacity-0"
          }`}
        />

        {/* Soft Dark Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative container mx-auto text-center z-10 space-y-6 md:space-y-12">

        {/* Hero Text */}
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-xl animate-slideInDown">
          Discover Your Next Adventure
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-md animate-fadeIn delay-200">
          Explore breathtaking destinations, create unforgettable memories, and travel with confidence
        </p>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto shadow-xl rounded-2xl p-6 bg-white/10 backdrop-blur-md animate-popIn delay-400">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Call to Action Button */}
        <button
          onClick={() => navigate("/destinations")}
          className="bg-yellow-400 text-gray-900 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl hover:bg-yellow-500 transition duration-300 animate-fadeIn delay-600"
        >
          Explore Destinations
        </button>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[ 
            { value: stats.destinations + "+", label: "Destinations", delay: 0 },
            { value: stats.travelers.toLocaleString() + "+", label: "Happy Travelers", delay: 100 },
            { value: (stats.rating / 10).toFixed(1) + "★", label: "Average Rating", delay: 200 },
            { value: stats.support + "/7", label: "Support", delay: 300 },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg animate-fadeUp`}
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="text-gray-200 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Existing Custom Animations (UNCHANGED) */}
      <style>
        {`
          @keyframes slideInDown {
            0% { opacity: 0; transform: translateY(-40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-slideInDown { animation: slideInDown 0.8s ease-out forwards; }

          @keyframes popIn {
            0% { opacity: 0; transform: scale(0.9);}
            100% { opacity: 1; transform: scale(1);}
          }
          .animate-popIn { animation: popIn 0.8s ease-out forwards; }

          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeUp { animation: fadeUp 0.8s ease-out forwards; }

          @keyframes fadeIn {
            0% { opacity: 0;}
            100% { opacity: 1;}
          }
          .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }

          .delay-100 { animation-delay: 0.10s; }
          .delay-200 { animation-delay: 0.20s; }
          .delay-300 { animation-delay: 0.30s; }
          .delay-400 { animation-delay: 0.40s; }
          .delay-500 { animation-delay: 0.50s; }
          .delay-600 { animation-delay: 0.6s; }
        `}
      </style>
    </div>
  );
};

export default Hero;
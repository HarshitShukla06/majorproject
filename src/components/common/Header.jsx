import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut, Heart } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-8 py-6 flex items-center justify-between">
        {/* 🔥 PREMIUM LOGO */}
        <Link to="/" className="flex items-center space-x-4 group">
          {/* SVG Logo */}
          <div className="relative w-14 h-14 group-hover:rotate-6 transition duration-500">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Gradient Definition */}
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="50%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>

              {/* Compass Circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#grad1)"
                strokeWidth="6"
                fill="none"
              />

              {/* Airplane Arrow */}
              <polygon points="50,20 60,55 50,50 40,55" fill="url(#grad1)" />
            </svg>
          </div>

          {/* Brand Text */}
          <div className="leading-tight">
            <span className="block text-xs tracking-[0.4em] uppercase text-gray-500">
              Experience
            </span>

            <span
              className="text-4xl font-extrabold tracking-wide 
                             bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 
                             bg-clip-text text-transparent 
                             group-hover:tracking-widest 
                             transition-all duration-500"
            >
              Gantavia
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden lg:flex space-x-10 font-semibold text-base tracking-wide">
          <Link to="/" className="hover:text-blue-600 transition">
            HOME
          </Link>
          <Link to="/destinations" className="hover:text-blue-600 transition">
            DESTINATIONS
          </Link>
          <Link to="/itinerary" className="hover:text-blue-600 transition">
            PLAN TRIP
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            ABOUT
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            CONTACT
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-5">
          <button
            onClick={() => navigate("/favourites")}
            className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center"
          >
            <Heart size={20} />
          </button>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center"
              >
                <User size={20} />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-3 w-52 bg-white shadow-xl rounded-xl py-2">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/auth")}
              className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center"
            >
              <User size={20} />
            </button>
          )}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t px-8 py-5 space-y-4 font-medium text-base">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/destinations" onClick={() => setIsMenuOpen(false)}>
            Destinations
          </Link>
          <Link to="/itinerary" onClick={() => setIsMenuOpen(false)}>
            Plan Trip
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

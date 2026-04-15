import { useState } from "react";
import { Sliders, X } from "lucide-react";
import Button from "../common/Button";

const FilterPanel = ({ onFilterChange, isMobile }) => {
  const [isOpen, setIsOpen] = useState(!isMobile);

  const [filters, setFilters] = useState({
    priceRange: [0, 50000],
    rating: 0,
    duration: "",
    category: [],
  });

  // ✅ FIXED categories (match DB exactly)
  const categories = [
    "beach",
    "mountain",   // ✅ fixed (was Mountains)
    "city",
    "adventure",
    "culture",
    "nature",
    "historical"
  ];

  const durations = ["1-3 days", "4-7 days", "8-14 days", "15+ days"];

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleCategoryToggle = (category) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter((c) => c !== category)
      : [...filters.category, category];

    handleFilterChange("category", newCategories);
  };

  const resetFilters = () => {
    const defaultFilters = {
      priceRange: [0, 50000],
      rating: 0,
      duration: "",
      category: [],
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  const filterContent = (
    <div className="space-y-6">

      {/* ✅ PRICE RANGE FIX */}
      <div>
        <label className="block font-semibold text-gray-900 mb-2">
          Price Range
        </label>

        <input
          type="range"
          min="0"
          max="50000"   // ✅ FIXED (was 5000)
          step="500"
          value={filters.priceRange[1]}
          onChange={(e) =>
            handleFilterChange("priceRange", [0, parseInt(e.target.value)])
          }
          className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-blue-600"
        />

        <span className="text-sm text-gray-600">
          Max: ₹{filters.priceRange[1].toLocaleString()}
        </span>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Minimum Rating</h3>
        <div className="flex flex-wrap gap-2">
          {[0, 3, 4, 4.5].map((rating) => (
            <button
              key={rating}
              onClick={() => handleFilterChange("rating", rating)}
              className={`px-4 py-2 rounded-lg border ${
                filters.rating === rating
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {rating > 0 ? `${rating}+` : "Any"}
            </button>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Duration</h3>
        <select
          value={filters.duration}
          onChange={(e) => handleFilterChange("duration", e.target.value)}
          className="w-full px-4 py-3 border rounded-lg"
        >
          <option value="">Any duration</option>
          {durations.map((duration) => (
            <option key={duration} value={duration}>
              {duration}
            </option>
          ))}
        </select>
      </div>

      {/* ✅ CATEGORY FIX */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryToggle(category)}
              className={`px-4 py-2 rounded-lg border ${
                filters.category.includes(category)
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <Button variant="outline" className="w-full" onClick={resetFilters}>
        Reset Filters
      </Button>
    </div>
  );

  // Mobile
  if (isMobile) {
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full"
        >
          <Sliders className="w-6 h-6" />
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black/50">
            <div className="absolute right-0 w-full max-w-sm bg-white h-full p-6">
              <div className="flex justify-between mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <X onClick={() => setIsOpen(false)} />
              </div>
              {filterContent}
            </div>
          </div>
        )}
      </>
    );
  }

  // Desktop
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-bold">Filters</h2>
        <Button variant="outline" size="sm" onClick={resetFilters}>
          Reset All
        </Button>
      </div>
      {filterContent}
    </div>
  );
};

export default FilterPanel;
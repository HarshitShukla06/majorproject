import { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import Button from "./Button";

const SearchBar = ({ onSearch }) => {
  const [searchData, setSearchData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    guests: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchData);
  };

  const handleChange = (field, value) => {
    setSearchData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-2xl p-6 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Destination */}
        <div className="flex items-center space-x-3 px-4 py-3 bg-gray-50 rounded-lg">
          <MapPin className="w-5 h-5 text-blue-600" />
          <input
            type="text"
            placeholder="Where to?"
            value={searchData.destination}
            onChange={(e) => handleChange("destination", e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Start Date */}
        <div className="flex items-center space-x-3 px-4 py-3 bg-gray-50 rounded-lg">
          <Calendar className="w-5 h-5 text-blue-600" />
          <input
            type="date"
            value={searchData.startDate}
            onChange={(e) => handleChange("startDate", e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-700"
          />
        </div>

        {/* End Date */}
        <div className="flex items-center space-x-3 px-4 py-3 bg-gray-50 rounded-lg">
          <Calendar className="w-5 h-5 text-blue-600" />
          <input
            type="date"
            value={searchData.endDate}
            onChange={(e) => handleChange("endDate", e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-700"
          />
        </div>

        {/* Guests */}
        <div className="flex items-center space-x-3 px-4 py-3 bg-gray-50 rounded-lg">
          <Users className="w-5 h-5 text-blue-600" />
          <select
            value={searchData.guests}
            onChange={(e) => handleChange("guests", Number(e.target.value))}
            className="flex-1 bg-transparent outline-none text-gray-700"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>
                {num} Guest{num > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Button type="submit" size="lg" className="w-full md:w-auto">
          <Search className="w-5 h-5 inline-block mr-2" />
          Search Destinations
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;

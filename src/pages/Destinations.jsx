import { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import DestinationCard from "../components/destinations/DestinationCard";
import FilterPanel from "../components/destinations/FilterPanel";
import { Search, MapPin } from "lucide-react";
import Button from "../components/common/Button";
import { getDestinations } from "../services/api";

const Destinations = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("destination") || ""
  );

  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("popular");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const hasFetched = useRef(false);

  // ✅ Book Now Navigation (from dev)
  const handleBookNow = (destination) => {
    navigate("/plantrip", { state: destination });
  };

  // ✅ Fetch once
  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    fetchDestinations();
  }, []);

  useEffect(() => {
    setFilteredDestinations(destinations);
  }, [destinations]);

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  const fetchDestinations = async () => {
    try {
      setLoading(true);

      const data = await getDestinations();

      const formatted = data.map((dest) => ({
        id: dest._id,
        name: dest.name,
        country: dest.state || "India",
        location: dest.state || "",
        image: `http://localhost:5000${dest.image}`,
        rating: dest.rating || 4.5,
        reviews: dest.reviews || 1000,
        price: dest.price || 10000,
        duration: dest.duration || 5,
        description: dest.description,
        category: Array.isArray(dest.category)
          ? dest.category.map((c) => c.toLowerCase())
          : [dest.category?.toLowerCase() || "general"],
      }));

      setDestinations(formatted);
      setFilteredDestinations(formatted);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    } finally {
      setLoading(false);
    }
  };

  /* FILTER */
  const handleFilterChange = (filters) => {
    let filtered = [...destinations];

    filtered = filtered.filter(
      (dest) =>
        dest.price >= filters.priceRange[0] &&
        dest.price <= filters.priceRange[1]
    );

    if (filters.rating > 0) {
      filtered = filtered.filter((dest) => dest.rating >= filters.rating);
    }

    if (filters.duration) {
      const durationMap = {
        "1-3 days": [1, 3],
        "4-7 days": [4, 7],
        "8-14 days": [8, 14],
        "15+ days": [15, 999],
      };

      const [min, max] = durationMap[filters.duration];

      filtered = filtered.filter(
        (dest) => dest.duration >= min && dest.duration <= max
      );
    }

    if (filters.category.length > 0) {
      filtered = filtered.filter((dest) =>
        dest.category.some((cat) =>
          filters.category.map((c) => c.toLowerCase()).includes(cat)
        )
      );
    }

    setFilteredDestinations(filtered);
    setCurrentPage(1);
  };

  /* SEARCH */
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredDestinations(destinations);
      return;
    }

    const filtered = destinations.filter(
      (dest) =>
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredDestinations(filtered);
    setCurrentPage(1);
  };

  /* SORT */
  const handleSort = (sortType) => {
    setSortBy(sortType);

    let sorted = [...filteredDestinations];

    switch (sortType) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        sorted.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    setFilteredDestinations(sorted);
  };

  /* PAGINATION */
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const currentDestinations = filteredDestinations.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);

  /* LOADING */
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-16 w-16 border-t-4 border-blue-600 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Destinations
          </h1>
          <p className="text-xl mb-8">
            Discover amazing places around India
          </p>

          <div className="max-w-2xl">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex items-center px-4 text-gray-500">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-4 outline-none text-gray-900"
              />
              <Button onClick={handleSearch} className="rounded-none">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          <aside className="hidden lg:block w-80">
            <FilterPanel onFilterChange={handleFilterChange} isMobile={false} />
          </aside>

          <div className="lg:hidden">
            <FilterPanel onFilterChange={handleFilterChange} isMobile={true} />
          </div>

          <div className="flex-1">

            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex justify-end">
              <select
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
                className="px-4 py-2 border rounded-lg"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {filteredDestinations.length === 0 ? (
              <div className="text-center p-10">
                <MapPin className="mx-auto mb-4 text-gray-400" size={40} />
                <p>No destinations found</p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {currentDestinations.map((destination) => (
                    <DestinationCard
                      key={destination.id}
                      destination={destination}
                      viewMode={viewMode}
                      onBookNow={handleBookNow}
                    />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-10 flex justify-center gap-2">
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-4 py-2 rounded-lg ${
                          currentPage === i + 1
                            ? "bg-blue-600 text-white"
                            : "border"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
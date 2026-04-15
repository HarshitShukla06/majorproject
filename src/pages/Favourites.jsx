import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    loadFavourites();
  }, []);

  const loadFavourites = () => {
    const stored = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(stored);
  };

  const removeFavourite = (id) => {
    const updated = favourites.filter((item) => item.id !== id);
    localStorage.setItem("favourites", JSON.stringify(updated));
    setFavourites(updated);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Your Favourite Destinations
      </h1>

      {favourites.length === 0 ? (
        <p className="text-gray-500">No destinations liked yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {favourites.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-lg overflow-hidden relative"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              <button
                onClick={() => removeFavourite(item.id)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
              >
                <Heart className="w-5 h-5 fill-red-500 text-red-500" />
              </button>

              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.country}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
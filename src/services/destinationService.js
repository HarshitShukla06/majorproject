import api from "./api";

export const destinationService = {
  // ✅ Get all destinations from DB
  getAllDestinations: async () => {
    try {
      const response = await api.get("/destinations");
      return response.data;
    } catch (error) {
      console.error("Error fetching destinations:", error);
      return [];
    }
  },

  // ✅ Get single destination
  getDestinationById: async (id) => {
    try {
      const response = await api.get(`/destinations/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching destination:", error);
      return null;
    }
  },

  // ✅ Featured (simple logic)
  getFeaturedDestinations: async () => {
    try {
      const response = await api.get("/destinations");
      return response.data.slice(0, 6);
    } catch (error) {
      console.error("Error fetching featured:", error);
      return [];
    }
  },

  // ✅ Search (frontend filter)
  searchDestinations: async (query) => {
    try {
      const response = await api.get("/destinations");

      return response.data.filter((dest) =>
        dest.name.toLowerCase().includes(query.toLowerCase())
      );
    } catch (error) {
      console.error("Search error:", error);
      return [];
    }
  },
};
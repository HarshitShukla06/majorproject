import axios from "axios";

/* =========================
   BASE BACKEND API
========================= */
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* =========================
   AUTH INTERCEPTORS
========================= */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.href = "/auth";
    }

    return Promise.reject(error);
  }
);

/* =========================
   DESTINATION APIs
========================= */

// Get all destinations
export const getDestinations = async () => {
  try {
    const res = await api.get("/destinations");
    return res.data;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return [];
  }
};

// Get single destination
export const getDestinationById = async (id) => {
  try {
    const res = await api.get(`/destinations/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching destination:", error);
    return null;
  }
};

// Add destination (admin)
export const addDestination = async (data) => {
  const res = await api.post("/destinations", data);
  return res.data;
};

// Update destination
export const updateDestination = async (id, data) => {
  const res = await api.put(`/destinations/${id}`, data);
  return res.data;
};

// Delete destination
export const deleteDestination = async (id) => {
  const res = await api.delete(`/destinations/${id}`);
  return res.data;
};

export const getFeaturedDestinations = async () => {
  const response = await fetch("http://localhost:5000/api/destinations/featured");
  return response.json();
};

/* =========================
   EXPORT
========================= */
export default api;
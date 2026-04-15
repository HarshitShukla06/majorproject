import Destination from "../models/Destination.js";

// Get all destinations
export const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find().sort({ createdAt: -1 });
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch destinations" });
  }
};

// Get featured destinations
export const getFeaturedDestinations = async (req, res) => {
  try {
    const featured = await Destination.find({ featured: true })
      .sort({ rating: -1 })
      .limit(4);

    res.json(featured);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch featured destinations" });
  }
};

// Get single destination
export const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (!destination) {
      return res.status(404).json({ msg: "Destination not found" });
    }

    res.json(destination);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch destination" });
  }
};

// Add destination
export const addDestination = async (req, res) => {
  try {
    const newDestination = await Destination.create({
      ...req.body,
      featured: req.body.featured || false,
    });

    res.status(201).json(newDestination);
  } catch (error) {
    res.status(500).json({ error: "Failed to add destination" });
  }
};

// Update destination
export const updateDestination = async (req, res) => {
  try {
    const updated = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ msg: "Destination not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update destination" });
  }
};

// Toggle featured
export const toggleFeatured = async (req, res) => {
  try {
    const { featured } = req.body;

    const updated = await Destination.findByIdAndUpdate(
      req.params.id,
      { featured },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ msg: "Destination not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update featured status" });
  }
};

// Delete destination
export const deleteDestination = async (req, res) => {
  try {
    const deleted = await Destination.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ msg: "Destination not found" });
    }

    res.json({ msg: "Destination deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete destination" });
  }
};
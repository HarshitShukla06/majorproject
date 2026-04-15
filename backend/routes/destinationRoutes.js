import express from "express";

import {
  getDestinations,
  getFeaturedDestinations,
  getDestinationById,
  addDestination,
  updateDestination,
  deleteDestination,
  toggleFeatured,
} from "../controllers/destinationController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/* ========= Public Routes ========= */
router.get("/", getDestinations);
router.get("/featured", getFeaturedDestinations);
router.get("/:id", getDestinationById);

/* ========= Protected Routes ========= */
router.post("/", protect, addDestination);
router.put("/:id", protect, updateDestination);
router.patch("/:id/featured", protect, toggleFeatured);
router.delete("/:id", protect, deleteDestination);

export default router;
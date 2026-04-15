import express from "express";
import { createTrip, getTrips } from "../controllers/tripController.js";

const router = express.Router();

router.post("/", createTrip);
router.get("/:userId", getTrips);

export default router;
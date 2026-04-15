import express from "express";
import Booking from "../models/Booking.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


// 📌 GET bookings (ONLY logged-in user)
router.get("/", protect, async (req, res) => {
  try {
    const bookings = await Booking.find({
      email: req.user.email, // 🔥 FILTER BY USER
    }).sort({ createdAt: -1 });

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


// 📌 POST booking
router.post("/", async (req, res) => {
  console.log("Incoming booking data:", req.body);

  try {
    const booking = new Booking(req.body);
    await booking.save();

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

export default router;

import mongoose from "mongoose";
import Destination from "./models/Destination.js";
import dotenv from "dotenv";
import destinations from "./data/destinations.js";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected for seeding");

    await Destination.deleteMany();

    await Destination.insertMany(destinations);

    console.log("✅ Data inserted successfully");
    process.exit();

  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

connectDB();
import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  destinations: Array,
  startDate: Date,
  endDate: Date,
});

export default mongoose.model("Trip", tripSchema);
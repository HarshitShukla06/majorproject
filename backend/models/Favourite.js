import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  destinationId: mongoose.Schema.Types.ObjectId,
});

export default mongoose.model("Favourite", favouriteSchema);

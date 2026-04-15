import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 4.5,
    },

    reviews: {
      type: Number,
      default: 1000,
    },

    price: {
      type: Number,
      default: 10000,
    },

    duration: {
      type: Number,
      default: 3,
    },

    category: {
      type: [String],
      default: ["City"],
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Destination", destinationSchema);
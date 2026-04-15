import Favourite from "../models/Favourite.js";

export const addFav = async (req, res) => {
  const fav = await Favourite.create(req.body);
  res.json(fav);
};

export const getFav = async (req, res) => {
  const fav = await Favourite.find({ userId: req.params.userId });
  res.json(fav);
};

export const deleteFav = async (req, res) => {
  await Favourite.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
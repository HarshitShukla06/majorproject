import express from "express";
import { addFav, getFav, deleteFav } from "../controllers/favouriteController.js";

const router = express.Router();

router.post("/", addFav);
router.get("/:userId", getFav);
router.delete("/:id", deleteFav);

export default router;

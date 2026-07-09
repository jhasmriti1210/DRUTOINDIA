import express from "express";
import {
    createNews,
    getAllNews,
    getSingleNews,
    deleteNews,
    updateNews,
} from "../controllers/newsController.js";

import { uploadNewsImage } from "../middleware/upload.js";

const router = express.Router();

router.post("/", uploadNewsImage.single("image"), createNews);
router.get("/", getAllNews);
router.get("/:slug", getSingleNews);
router.delete("/:id", deleteNews);
router.put("/:id", uploadNewsImage.single("image"), updateNews);



export default router;
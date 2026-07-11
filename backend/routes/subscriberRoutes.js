import express from "express";
import {
    subscribeToNews,
    unsubscribeFromNews,
    getSubscriberCount,
} from "../controllers/subscriberController.js";

const router = express.Router();

router.post("/subscribe", subscribeToNews);
router.get("/unsubscribe/:token", unsubscribeFromNews);
router.get("/count", getSubscriberCount);

export default router;
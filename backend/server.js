import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import connectDB from "./config/db.js";

// Routes
import newsRoutes from "./routes/newsRoutes.js";

dotenv.config();

connectDB();

const app = express();

// =========================
// Middlewares
// =========================

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://www.drutoindia.com",
        "https://drutoindia.com",
    ],
    credentials: true,
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Upload Folder
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// =========================
// Routes
// =========================

app.get("/", (req, res) => {
    res.send("DRUTO INDIA Backend Running...");
});

app.use("/api/news", newsRoutes);

// =========================
// Error Handler
// =========================

app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        success: false,
        message: err.message,
    });
});

// =========================
// Server
// =========================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `🚀 Server running on http://localhost:${PORT}`
    );
});
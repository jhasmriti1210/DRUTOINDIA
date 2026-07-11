import crypto from "crypto";
import Subscriber from "../models/Subscriber.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const subscribeToNews = async (req, res) => {
    try {
        const email = req.body.email?.trim().toLowerCase();

        if (!email || !emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address",
            });
        }

        const existingSubscriber = await Subscriber.findOne({ email });

        if (existingSubscriber) {
            if (existingSubscriber.isActive) {
                return res.status(409).json({
                    success: false,
                    message: "This email is already subscribed",
                });
            }

            existingSubscriber.isActive = true;
            existingSubscriber.unsubscribedAt = null;
            existingSubscriber.unsubscribeToken = crypto
                .randomBytes(32)
                .toString("hex");

            await existingSubscriber.save();

            return res.status(200).json({
                success: true,
                message: "Your subscription has been reactivated",
            });
        }

        await Subscriber.create({
            email,
            unsubscribeToken: crypto.randomBytes(32).toString("hex"),
        });

        return res.status(201).json({
            success: true,
            message: "Successfully subscribed to DRUTO INDIA news",
        });
    } catch (error) {
        console.error("Subscribe error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to subscribe right now",
            error: error.message,
        });
    }
};

export const unsubscribeFromNews = async (req, res) => {
    try {
        const { token } = req.params;

        const subscriber = await Subscriber.findOne({
            unsubscribeToken: token,
        });

        if (!subscriber) {
            return res.status(404).json({
                success: false,
                message: "Invalid or expired unsubscribe link",
            });
        }

        subscriber.isActive = false;
        subscriber.unsubscribedAt = new Date();

        await subscriber.save();

        return res.status(200).json({
            success: true,
            message: "You have been unsubscribed successfully",
        });
    } catch (error) {
        console.error("Unsubscribe error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to unsubscribe right now",
            error: error.message,
        });
    }
};

export const getSubscriberCount = async (req, res) => {
    try {
        const count = await Subscriber.countDocuments({
            isActive: true,
        });

        return res.status(200).json({
            success: true,
            count,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to fetch subscriber count",
            error: error.message,
        });
    }
};
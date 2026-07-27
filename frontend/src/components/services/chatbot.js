import axios from "axios";

export const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const API_URL = `${BACKEND_URL}/api/chat`;

export const askBot = async (message) => {
    const res = await axios.post(API_URL, {
        message,
    });

    return res.data.reply;
};
import axios from "axios";

export const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const API_URL = `${BACKEND_URL}/api/chat`;

export const askBot = async (
    message,
    sessionId
) => {
    const res = await axios.post(API_URL, {
        message,
        sessionId,
    });

    return res.data;
};
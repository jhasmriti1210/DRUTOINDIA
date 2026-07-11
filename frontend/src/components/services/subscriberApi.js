import axios from "axios";

const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const SUBSCRIBER_API = `${BACKEND_URL}/api/subscribers`;

export const subscribeToNews = async (email) => {
    const response = await axios.post(
        `${SUBSCRIBER_API}/subscribe`,
        {
            email,
        },
    );

    return response.data;
};

export const unsubscribeFromNews = async (token) => {
    const response = await axios.get(
        `${SUBSCRIBER_API}/unsubscribe/${token}`,
    );

    return response.data;
};
import axios from "axios";

export const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const API_URL = `${BACKEND_URL}/api/news`;

export const getNews = async (category = "") => {
    const url = category ? `${API_URL}?category=${category}` : API_URL;
    const res = await axios.get(url);
    return res.data.news;
};

export const getSingleNews = async (slug) => {
    const res = await axios.get(`${API_URL}/${slug}`);
    return res.data.news;
};

export const createNews = async (formData) => {
    const res = await axios.post(API_URL, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return res.data;
};
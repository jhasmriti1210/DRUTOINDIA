import News from "../models/News.js";

const createSlug = (title) => {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
};

export const createNews = async (req, res) => {
    try {
        const { title, category, shortDescription, content, author } = req.body;

        if (!title || !category || !shortDescription || !content) {
            return res.status(400).json({
                success: false,
                message: "All required fields must be filled",
            });
        }

        let slug = createSlug(title);

        const existing = await News.findOne({ slug });
        if (existing) {
            slug = `${slug}-${Date.now()}`;
        }

        const image = req.file ? `/uploads/news/${req.file.filename}` : "";

        const news = await News.create({
            title,
            slug,
            category,
            shortDescription,
            content,
            author,
            image,
        });

        res.status(201).json({
            success: true,
            message: "News created successfully",
            news,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create news",
            error: error.message,
        });
    }
};

export const getAllNews = async (req, res) => {
    try {
        const { category } = req.query;

        const filter = { isPublished: true };

        if (category) {
            filter.category = category;
        }

        const news = await News.find(filter).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: news.length,
            news,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch news",
            error: error.message,
        });
    }
};

export const getSingleNews = async (req, res) => {
    try {
        const news = await News.findOne({
            slug: req.params.slug,
            isPublished: true,
        });

        if (!news) {
            return res.status(404).json({
                success: false,
                message: "News not found",
            });
        }

        res.status(200).json({
            success: true,
            news,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch news",
            error: error.message,
        });
    }
};

export const deleteNews = async (req, res) => {
    try {
        const news = await News.findByIdAndDelete(req.params.id);

        if (!news) {
            return res.status(404).json({
                success: false,
                message: "News not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "News deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete news",
            error: error.message,
        });
    }
};
import News from "../models/News.js";
import cloudinary from "../config/cloudinary.js";
import { sendNewsToSubscribers } from "../services/emailservice.js";

const createSlug = (title) => {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
};

const uploadToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: "druto-news",
                resource_type: "image",
            },
            (error, result) => {
                if (error) reject(error);
                else resolve(result);
            }
        );

        stream.end(fileBuffer);
    });
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

        let image = "";
        let imagePublicId = "";

        if (req.file) {
            const uploaded = await uploadToCloudinary(req.file.buffer);
            image = uploaded.secure_url;
            imagePublicId = uploaded.public_id;
        }

        const news = await News.create({
            title,
            slug,
            category,
            shortDescription,
            content,
            author,
            image,
            imagePublicId,
            publishDate:
                req.body.publishDate || new Date(),
        });

        res.status(201).json({
            success: true,
            message: "News created successfully",
            news,
        });
        sendNewsToSubscribers(news).catch((error) => {
            console.error(
                "Subscriber email notification failed:",
                error,
            );
        });
    } catch (error) {
        console.error("Create news error:", error);

        return res.status(500).json({
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

        const news = await News.find(filter).sort({
            publishDate: -1,
            createdAt: -1,
        });

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

export const updateNews = async (req, res) => {
    try {
        const {
            title,
            category,
            shortDescription,
            content,
            author,
            publishDate,
        } = req.body;

        const oldNews = await News.findById(req.params.id);

        if (!oldNews) {
            return res.status(404).json({
                success: false,
                message: "News not found",
            });
        }

        const updateData = {
            title,
            category,
            shortDescription,
            content,
            author,
        };

        if (publishDate) {
            updateData.publishDate = publishDate;
        }

        if (title && title !== oldNews.title) {
            let newSlug = createSlug(title);

            const existing = await News.findOne({
                slug: newSlug,
                _id: { $ne: req.params.id },
            });

            if (existing) {
                newSlug = `${newSlug}-${Date.now()}`;
            }

            updateData.slug = newSlug;
        }

        if (req.file) {
            if (oldNews.imagePublicId) {
                await cloudinary.uploader.destroy(oldNews.imagePublicId);
            }

            const uploaded = await uploadToCloudinary(req.file.buffer);

            updateData.image = uploaded.secure_url;
            updateData.imagePublicId = uploaded.public_id;
        }

        const news = await News.findByIdAndUpdate(
            req.params.id,
            updateData,
            {
                new: true,
                runValidators: true,
            },
        );

        return res.status(200).json({
            success: true,
            message: "News updated successfully",
            news,
        });
    } catch (error) {
        console.error("Update news error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to update news",
            error: error.message,
        });
    }
};
export const deleteNews = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);

        if (!news) {
            return res.status(404).json({
                success: false,
                message: "News not found",
            });
        }

        if (news.imagePublicId) {
            await cloudinary.uploader.destroy(news.imagePublicId);
        }

        await News.findByIdAndDelete(req.params.id);

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
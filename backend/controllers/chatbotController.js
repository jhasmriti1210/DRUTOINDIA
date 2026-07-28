import ai from "../services/geminiService.js";
import knowledge from "../services/knowledgeBase.js";
import conversationFlow from "../services/conversationFlow.js";

export const chat = async (req, res) => {

    try {

        const { message } = req.body;

        // Start Chat
        if (message === "start") {

            return res.json({
                reply: conversationFlow.start.reply,
                options: conversationFlow.start.options
            });

        }

        // Foreign Buyer
        if (message === "🌍 I am a Foreign Buyer") {

            return res.json({
                reply: conversationFlow.buyer.reply,
                options: conversationFlow.buyer.options
            });

        }

        // Manufacturer
        if (message === "🏭 I am an Indian Manufacturer") {

            return res.json({
                reply: conversationFlow.manufacturer.reply,
                options: conversationFlow.manufacturer.options
            });

        }

        // Gemini Fallback

        const prompt = `

${knowledge}

Customer:

${message}

`;

        const response = await ai.models.generateContent({

            model: "models/gemini-flash-latest",

            contents: prompt

        });

        res.json({

            reply: response.text,

            options: []

        });

    }

    catch (err) {
        if (err.status === 429) {
            return res.json({
                reply:
                    "🚦 Atlas is currently receiving a high number of requests and has temporarily reached its AI usage limit. Please try again in about a minute. If the issue continues, contact DRUTO INDIA at info@drutoindia.com or +91 9220475166.",
                options: [],
            });
        }

        console.error(err);

        res.status(500).json({
            reply: "Sorry, something went wrong.",
            options: [],
        });
    }

};
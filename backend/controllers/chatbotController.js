import client from "../services/openrouterService.js";
import Chat from "../models/chat.js";
import knowledge from "../services/knowledgeBase.js";
import conversationFlow from "../services/conversationFlow.js";
import developerKnowledge from "../services/developerKnowledge.js";

export const chat = async (req, res) => {

    try {

        const { message, sessionId } = req.body;

        // Start Chat
        if (message === "start") {

            await Chat.create({
                sessionId,
                role: "user",
                content: "start",
            });

            await Chat.create({
                sessionId,
                role: "assistant",
                content: conversationFlow.start.reply,
            });

            return res.json({
                reply: conversationFlow.start.reply,
                options: conversationFlow.start.options,
            });
        }

        // Foreign Buyer
        if (message === "🌍 I am a Foreign Buyer") {

            await Chat.create({
                sessionId,
                role: "user",
                content: message,
            });

            await Chat.create({
                sessionId,
                role: "assistant",
                content: conversationFlow.buyer.reply,
            });

            return res.json({
                reply: conversationFlow.buyer.reply,
                options: conversationFlow.buyer.options,
            });

        }

        // Manufacturer
        if (message === "🏭 I am an Indian Manufacturer") {

            await Chat.create({
                sessionId,
                role: "user",
                content: message,
            });

            await Chat.create({
                sessionId,
                role: "assistant",
                content: conversationFlow.manufacturer.reply,
            });

            return res.json({
                reply: conversationFlow.manufacturer.reply,
                options: conversationFlow.manufacturer.options,
            });

        }

        await Chat.create({
            sessionId,
            role: "user",
            content: message,
        });

        const chats = await Chat.find({ sessionId })
            .sort({ createdAt: -1 })
            .limit(20);

        const messages = chats
            .reverse()
            .map((chat) => ({
                role: chat.role,
                content: chat.content,
            }));


        // Gemini Fallback


        const completion = await client.chat.completions.create({
            model: "openrouter/free",

            messages: [
                {
                    role: "system",
                    content: `
${knowledge}

${developerKnowledge}
`,
                },

                ...messages,
            ],

            max_tokens: 500,
            temperature: 0.7,
        });

        const reply = completion.choices[0].message.content;

        await Chat.create({
            sessionId,
            role: "assistant",
            content: reply,
        });

        res.json({
            reply,
            options: [],
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


        console.error("OpenRouter Error:");
        console.error(err.status);
        console.error(err.error || err.message);

        res.status(500).json({
            reply: "Sorry, something went wrong.",
            options: [],
        });
    }

};
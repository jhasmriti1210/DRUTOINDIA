import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
    {
        sessionId: String,

        role: {
            type: String,
            enum: ["user", "assistant"],
        },

        content: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Chat", chatSchema);
import ai from "../services/geminiService.js";
import knowledge from "../services/knowledgeBase.js";

export const chat = async (req, res) => {

    try {

        const { message } = req.body;

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

            reply: response.text

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            reply: "Sorry, something went wrong."

        });

    }

}
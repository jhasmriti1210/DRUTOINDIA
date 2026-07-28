const conversationFlow = {
    start: {
        reply: `👋 Welcome to Druto India.

I'm Atlas, your 24/7 Digital Trade Assistant.

Please choose who you are:`,

        options: [
            "🌍 I am a Foreign Buyer",
            "🏭 I am an Indian Manufacturer"
        ]
    },

    buyer: {
        reply: "What product category are you looking to source from India?",

        options: [
            "Textiles",
            "Engineering",
            "Agriculture",
            "Chemicals",
            "Furniture",
            "Other"
        ]
    },

    manufacturer: {
        reply: "What products do you manufacture?",

        options: [
            "Textiles",
            "Engineering",
            "Food",
            "Furniture",
            "Chemicals",
            "Other"
        ]
    }
};

export default conversationFlow;
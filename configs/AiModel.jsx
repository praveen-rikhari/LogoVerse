const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

export const AIDesignIdea = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "\nBased on Logo of type Modern Mascot Logos Generate a text prompt to create Logo for Logo title/Brand name : Indian Spice with description: Indian Restaurant and referring to prompt: A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design- such as small decorative touches or natural accents-enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character.. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format with ideas field" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"ideas\": [\n    {\n      \"id\": 1,\n      \"description\": \"Chef Elephant with Spices\"\n    },\n    {\n       \"id\": 2,\n      \"description\": \"Smiling Tiger holding Curry\"\n    },\n    {\n      \"id\": 3,\n      \"description\": \"Friendly Parrot with Naan\"\n    },\n    {\n      \"id\": 4,\n      \"description\": \"Playful Monkey with Samosa\"\n    },\n     {\n      \"id\": 5,\n      \"description\": \"Happy Peacock with Thali\"\n    }\n  ]\n}\n```\n" },
            ],
        },
    ],
});

export const AILogoPrompt = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Generate a text prompt to create Logo for Logo Title/Brand name : cricket,with description: live score app, with Color combination of Forest Greens, also include the {logoIdea} and include Vinatge Custom Logos design idea and referring to this Logo Prompt:Generate a vintage, hand-drawn logo in a circular format. The logo should feature a central illustration, such as a symbol, icon, or image related to the brands identity. The illustration should be detailed and stylized, with a focus on linework and shading. The logo should also include the brand name, written in a vintage, decorative font. The overall aesthetic should be retro and nostalgic, evoking a sense of tradition and quality.  Give me result in JSON portal with prompt field only" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "I am currently unable to generate images, as that capability is only enabled for early testers. However, I can provide you with the text prompt in JSON format as you requested.\n\n```json\n{\n  \"prompt\": \"Generate a vintage, hand-drawn logo in a circular format for 'Cricket: Live Score App'. The color combination should primarily be Forest Greens. The logo should feature a central illustration of {logoIdea} (e.g., a cricket ball bursting through a vintage scoreboard, a stylized cricket bat and ball arrangement, or a classic cricket player silhouette). The illustration should be detailed and stylized, with a focus on linework and shading reminiscent of vintage custom logos. The brand name 'Cricket' should be written in a vintage, decorative font incorporated into the circular design. The overall aesthetic should be retro and nostalgic, evoking a sense of tradition, quality, and the excitement of live cricket scores.\"\n}\n```\n" },
            ],
        },
    ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());

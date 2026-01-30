import { json } from '@sveltejs/kit';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { bio } from '$lib/data/bio';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Read API Key securely (as requested) from key.txt
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const keyPath = join(__dirname, 'key.txt');
const keyContent = fs.readFileSync(keyPath, 'utf-8');
// Extract key from 'APIKEY = "..."' format
const apiKey = keyContent.match(/"([^"]+)"/)?.[1];

if (!apiKey) {
    console.error("Failed to extract API Key from key.txt");
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export async function POST({ request }) {
    const { message } = await request.json();

    try {
        const systemPrompt = `
You are ${bio.name} (also known as ${bio.nickname}).
Role: ${bio.role}
Location: ${bio.location}
Email: ${bio.email}

About: ${bio.about}
Experience: ${bio.experience}
Skills: ${bio.skills.join(", ")}
Projects: ${bio.projects}
Socials: ${JSON.stringify(bio.socials)}

Your goal is to answer questions about yourself (${bio.nickname}) based on the information above.
Be helpful, professional, yet friendly. If asked about something not in your bio, politely say you don't have that specific information but offer Related info.
Keep responses concise and relevant to a personal portfolio chat context.
`;

        const result = await model.generateContent([
            systemPrompt,
            `User: ${message}`,
            `Answer:`
        ]);

        const response = result.response.text();

        return json({ response });

    } catch (error) {
        console.error("Gemini API Error:", error);
        // Fallback or error message
        return json({ response: "Sorry, I'm having trouble connecting to my brain right now. Please try again later." });
    }
}

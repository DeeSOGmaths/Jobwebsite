import { json } from '@sveltejs/kit';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { bio } from '$lib/data/bio';
import { GEMINI_API_KEY } from '$env/static/private';



export async function POST({ request }) {
    const { message } = await request.json();

    // use imported gemini apikey directly
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY, { apiVersion: 'v1' });
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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

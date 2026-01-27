import { json } from '@sveltejs/kit';
import { keywords } from '$lib/data/bio';

export async function POST({ request }) {
    const { message } = await request.json();
    const cleanMessage = message.toLowerCase();

    let response = keywords.default;

    // improved keyword matching
    for (const [key, value] of Object.entries(keywords)) {
        if (cleanMessage.includes(key)) {
            response = value;
            break;
        }
    }

    // Fallback logic for common greetings
    if (cleanMessage.includes("hello") || cleanMessage.includes("hi")) {
        response = `Hello! I am ${keywords.name} How can I help you today?`;
    }

    // Simulate network delay for realism
    await new Promise(r => setTimeout(r, 800));

    return json({ response });
}

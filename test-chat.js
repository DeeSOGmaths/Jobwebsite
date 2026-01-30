
async function testChat() {
    try {
        const response = await fetch('http://localhost:5201/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: "What is your nickname and what do you do?" })
        });
        const data = await response.json();
        console.log("Response:", data.response);
    } catch (err) {
        console.error("Error:", err);
    }
}

testChat();

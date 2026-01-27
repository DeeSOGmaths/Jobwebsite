<script>
    import { onMount } from 'svelte';
    
    let messages = [
        { sender: 'ai', text: "Hello! I'm DEESOG AI. Ask me anything about Oludolapo Togun." }
    ];
    let newMessage = '';
    let isLoading = false;
    let chatContainer;

    async function sendMessage() {
        if (!newMessage.trim()) return;

        const userMessage = { sender: 'user', text: newMessage };
        messages = [...messages, userMessage];
        const messageToSend = newMessage;
        newMessage = '';
        isLoading = true;

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: messageToSend })
            });
            const data = await response.json();
            
            messages = [...messages, { sender: 'ai', text: data.response }];
        } catch (error) {
            messages = [...messages, { sender: 'ai', text: "Sorry, I'm having trouble connecting right now." }];
        } finally {
            isLoading = false;
        }
    }

    // Auto-scroll to bottom
    $: if (messages && chatContainer) {
        setTimeout(() => {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 0);
    }
</script>

<div class="chat-wrapper">
    <div class="chat-container">
        <div class="header">
            <h1>DEESOG AI 🤖</h1>
            <p>Ask me about my skills, projects, and bio!</p>
        </div>

        <div class="messages" bind:this={chatContainer}>
            {#each messages as msg}
                <div class="message {msg.sender}">
                    <div class="bubble">
                        {@html msg.text}
                    </div>
                </div>
            {/each}
            {#if isLoading}
                <div class="message ai">
                    <div class="bubble loading">
                        <span>.</span><span>.</span><span>.</span>
                    </div>
                </div>
            {/if}
        </div>

        <form class="input-area" on:submit|preventDefault={sendMessage}>
            <input 
                type="text" 
                bind:value={newMessage} 
                placeholder="Ask something..." 
                disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !newMessage.trim()}>
                <i class="fa-solid fa-paper-plane"></i>
            </button>
        </form>
    </div>
</div>

<style>
    /* Global page layout handled by +page.svelte usually, but we ensure wrapper is full height */
    :global(body) {
        margin: 0;
        background-color: #050b2e; /* Ensure background matches */
    }

    .chat-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        background: linear-gradient(to right, #050b2e, #230627);
    }

    .chat-container {
        width: 100%;
        max-width: 600px;
        height: 80vh;
        background: rgba(255, 255, 255, 0.05); /* Glassmorphism */
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    }

    .header {
        padding: 20px;
        background: rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        text-align: center;
        color: white;
    }

    .header h1 {
        margin: 0;
        font-size: 1.5rem;
        color: lightblue;
        font-family: "Bitcount Prop Single", system-ui;
    }

    .header p {
        margin: 5px 0 0;
        font-size: 0.9rem;
        opacity: 0.7;
    }

    .messages {
        flex: 1;
        padding: 20px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .message {
        display: flex;
        flex-direction: column;
    }

    .message.user {
        align-items: flex-end;
    }

    .message.ai {
        align-items: flex-start;
    }

    .bubble {
        max-width: 80%;
        padding: 12px 16px;
        border-radius: 15px;
        font-size: 1rem;
        line-height: 1.4;
        word-wrap: break-word;
        color: white;
    }

    .message.user .bubble {
        background: linear-gradient(135deg, #6e8efb, #a777e3);
        border-bottom-right-radius: 5px;
    }

    .message.ai .bubble {
        background: rgba(255, 255, 255, 0.1);
        border-bottom-left-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .loading span {
        animation: blink 1.4s infinite both;
        font-size: 1.5rem;
        line-height: 10px;
        margin: 0 2px;
    }

    .loading span:nth-child(2) { animation-delay: 0.2s; }
    .loading span:nth-child(3) { animation-delay: 0.4s; }

    @keyframes blink {
        0% { opacity: 0.2; }
        20% { opacity: 1; }
        100% { opacity: 0.2; }
    }

    .input-area {
        padding: 20px;
        background: rgba(0, 0, 0, 0.2);
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        display: flex;
        gap: 10px;
    }

    input {
        flex: 1;
        padding: 12px 20px;
        border-radius: 25px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.05);
        color: white;
        outline: none;
        transition: border-color 0.3s;
    }

    input:focus {
        border-color: lightblue;
    }

    input::placeholder {
        color: rgba(255, 255, 255, 0.4);
    }

    button {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: lightblue;
        color: #050b2e;
        font-size: 1.2rem;
        cursor: pointer;
        transition: transform 0.2s;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button:hover:not(:disabled) {
        transform: scale(1.1);
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>

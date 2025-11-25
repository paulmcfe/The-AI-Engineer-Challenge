/**
 * API client for communicating with the FastAPI backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export interface ChatResponse {
  reply: string;
}

/**
 * Sends a message to the chat API and returns the assistant's reply
 * @param message - The user's message to send
 * @returns The assistant's reply text
 * @throws Error if the API request fails
 */
export async function sendMessage(message: string): Promise<string> {
  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ detail: 'Unknown error' }));
      throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
    }

    const data: ChatResponse = await response.json();
    return data.reply;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to send message');
  }
}


import { GoogleGenerativeAI } from '@google/generative-ai';

export const genAI = new GoogleGenerativeAI(process.env.NEXT_GEMINI_API_KEY || '');

export async function generateChatResponse(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash", // or gemini-1.5-pro
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 300
      },
      systemInstruction: {
        role: "system",
        parts: [{
          text: `You are an GTarang Assist trained to provide helpful and knowledgeable responses specifically about GTarang .

Gtarang is a leading tech consulting firm that works with major e-commerce and logistics companies. They specialize in warehouse technology consulting, robotics, AI/ML integration, automation systems, and even satellite design and testing support.

You should be able to explain:
- The services Gtarang provides in warehouse optimization (like damaged product detection, parcel clustering, anomaly detection)
- How AI/ML is used in their solutions
- Any ongoing innovations or use-cases like computer vision, operational analytics, or robotic process improvement.

Stay professional, concise, and informative. If the prompt is unrelated, respond helpfully or guide the user to ask something relevant about Gtrang’s solutions or technologies.`
        }]
      }
    });

    const chat = await model.startChat(); // Important for systemInstruction
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error('Error generating response:', error);
    return "I'm sorry, there was an error with the AI service. Please check the API key or try again later.";
  }
}

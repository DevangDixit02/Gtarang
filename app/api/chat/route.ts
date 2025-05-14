import { NextResponse } from 'next/server';
import { generateChatResponse } from '@/lib/gemini';

// Fallback responses in case the API is not available
const fallbackResponses = [
  "We specialize in robotics, AI, warehouse automation, and satellite technology consulting. Drop us an email at info@gtarangenergy.com for details.",
  "I'd be happy to discuss your project needs directly. Feel free to call us at +91 8879476341 to speak with our consultants.",
  "Thanks for reaching out! We focus on cutting-edge tech consulting. Send specific requirements to info@gtarangenergy.com and we'll get back to you promptly.",
  "Our team works with robotics, AI, and automation systems. What specific challenge can we help you solve?",
  "We've worked with clients like Armstrong Dematic on warehouse automation. Let me know what you're looking for and I can connect you with the right specialist.",
];

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Create a prompt that includes context about GTarang Solutions
    const contextualPrompt = `
      You are the AI assistant for GTarang Solutions, a technology company specializing in consulting 
      services for Robotics, AI, Warehouse Automation, and Satellite Technology. 
      
      Company information:
      - Based in Maharashtra, India
      - Specializes in advanced technology consulting and implementation
      - Works with clients like Armstrong Dematic (Warehouse Automation) and Transcend Satellite
      - Offers expertise in robotics, AI/ML, warehouse automation systems, and satellite technology
      
      IMPORTANT GUIDELINES:
      1. Answer as if you're a human consultant, not AI
      2. Keep responses extremely concise (1-2 sentences when possible)
      3. Be conversational and natural in tone
      4. Never mention that you're an AI
      5. If you don't know something specific about GTarang's services, suggest contacting us at info@gtarangenergy.com
      6. Use minimal formatting, only basic markdown when absolutely necessary
      
      Customer query: ${message}
    `;

    try {
      const response = await generateChatResponse(contextualPrompt);
      return NextResponse.json({ response });
    } catch (error) {
      console.error('Error with Gemini API:', error);
      // Return a random fallback response if the API fails
      const fallbackResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      return NextResponse.json({ response: fallbackResponse });
    }
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
} 
import { GoogleGenAI, Type } from "@google/genai";
import { AIStyleSuggestion } from "../types";

export async function getAIStyleSuggestion(content: string): Promise<AIStyleSuggestion> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Explicitly asking for high variety and creative randomness
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Analyze this QR content: "${content}". 
      Generate a UNIQUE and CREATIVE design theme. Do not always pick the same styles. 
      Select one from these allowed sets:
      - dotType: ['square', 'dots', 'rounded', 'extra-rounded', 'classy', 'classy-rounded']
      - cornerSquareType: ['square', 'dot', 'extra-rounded']
      - cornerDotType: ['square', 'dot']
      
      Provide hex colors that are highly readable but visually striking. 
      Make the cornerSquareColor and cornerDotColor different from primaryColor for an accent look.
      BE RANDOM AND VARIED. Sometimes suggest dark themes, sometimes light, sometimes colorful vibrant ones.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            primaryColor: { type: Type.STRING },
            secondaryColor: { type: Type.STRING },
            cornerSquareColor: { type: Type.STRING },
            cornerDotColor: { type: Type.STRING },
            dotType: { type: Type.STRING },
            cornerSquareType: { type: Type.STRING },
            cornerDotType: { type: Type.STRING },
            mood: { type: Type.STRING },
            description: { type: Type.STRING }
          },
          required: [
            "primaryColor", 
            "secondaryColor", 
            "cornerSquareColor", 
            "cornerDotColor", 
            "dotType", 
            "cornerSquareType", 
            "cornerDotType", 
            "mood", 
            "description"
          ]
        }
      }
    });

    const jsonStr = response.text?.trim() || "{}";
    const result = JSON.parse(jsonStr);
    return result as AIStyleSuggestion;
  } catch (error) {
    console.error("QR Maker Studio - AI Suggestion Error:", error);
    
    // Pick a truly random set of fallback constants to ensure variety even on error
    const dots = ['square', 'dots', 'rounded', 'extra-rounded', 'classy', 'classy-rounded'];
    const corners = ['square', 'dot', 'extra-rounded'];
    
    return {
      primaryColor: "#" + Math.floor(Math.random()*16777215).toString(16),
      secondaryColor: "#ffffff",
      cornerSquareColor: "#4f46e5",
      cornerDotColor: "#4f46e5",
      dotType: dots[Math.floor(Math.random() * dots.length)] as any,
      cornerSquareType: corners[Math.floor(Math.random() * corners.length)] as any,
      cornerDotType: "dot",
      mood: "Randomized Fallback",
      description: "A randomly generated design due to connection issues."
    };
  }
}
import { GoogleGenAI, Type } from "@google/genai";
import { AIStyleSuggestion } from "../types";

export async function getAIStyleSuggestion(content: string): Promise<AIStyleSuggestion> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const seed = Math.random().toString(36).substring(7); // Add entropy to force fresh generation
    
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Analyze this QR content: "${content}". 
      Entropy Seed: ${seed}.
      Generate a COMPLETELY NEW, UNIQUE and CREATIVE design theme. Avoid common patterns.
      
      Select one from these allowed sets:
      - dotType: ['square', 'dots', 'rounded', 'extra-rounded', 'classy', 'classy-rounded']
      - cornerSquareType: ['square', 'dot', 'extra-rounded']
      - cornerDotType: ['square', 'dot']
      
      Provide hex colors that are highly readable (good contrast) but visually striking. 
      Make the cornerSquareColor and cornerDotColor different from the pattern primaryColor for an accent look.
      
      BE BOLD AND VARIED. Sometimes suggest high-contrast dark themes, sometimes soft pastels, sometimes vibrant gradients.`,
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
    
    // Fallback to random colors and styles
    const dots = ['square', 'dots', 'rounded', 'extra-rounded', 'classy', 'classy-rounded'];
    const corners = ['square', 'dot', 'extra-rounded'];
    const randomHex = () => "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    
    return {
      primaryColor: randomHex(),
      secondaryColor: "#ffffff",
      cornerSquareColor: randomHex(),
      cornerDotColor: randomHex(),
      dotType: dots[Math.floor(Math.random() * dots.length)] as any,
      cornerSquareType: corners[Math.floor(Math.random() * corners.length)] as any,
      cornerDotType: "dot",
      mood: "Randomized Discovery",
      description: "A fresh random style generated just for you."
    };
  }
}
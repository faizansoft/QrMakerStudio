
import { GoogleGenAI, Type } from "@google/genai";
import { AIStyleSuggestion } from "../types";

export async function getAIStyleSuggestion(content: string): Promise<AIStyleSuggestion> {
  // Initialize AI client using the injected environment variable.
  // Vite's 'define' will replace process.env.API_KEY with the literal string value during build.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    // Using gemini-3-pro-preview for complex reasoning task (thematic design analysis).
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Analyze this content for a QR code: "${content}". 
      Suggest a complete professional design theme. Choose values from these specific allowed sets:
      - dotType: ['square', 'dots', 'rounded', 'extra-rounded', 'classy', 'classy-rounded']
      - cornerSquareType: ['square', 'dot', 'extra-rounded']
      - cornerDotType: ['square', 'dot']
      
      Suggest colors in Hex format. The corner colors can be different from the main pattern color for an accent effect.
      Make the selection thematic (e.g., 'classy' for luxury links, 'dots' for tech, 'extra-rounded' for friendly/social).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            primaryColor: { type: Type.STRING, description: "Main pattern color" },
            secondaryColor: { type: Type.STRING, description: "Background color" },
            cornerSquareColor: { type: Type.STRING, description: "Outer corner color" },
            cornerDotColor: { type: Type.STRING, description: "Inner corner eye color" },
            dotType: { type: Type.STRING, description: "One of the allowed dot types" },
            cornerSquareType: { type: Type.STRING, description: "One of the allowed corner square types" },
            cornerDotType: { type: Type.STRING, description: "One of the allowed corner dot types" },
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

    // Access the text property directly (it is not a method) and use safe navigation.
    const jsonStr = response.text?.trim() || "{}";
    const result = JSON.parse(jsonStr);
    return result as AIStyleSuggestion;
  } catch (error) {
    console.error("Gemini API Error on Production:", error);
    // Fallback to a neutral style if the API call fails or the key is invalid.
    return {
      primaryColor: "#1e293b",
      secondaryColor: "#ffffff",
      cornerSquareColor: "#1e293b",
      cornerDotColor: "#1e293b",
      dotType: "square",
      cornerSquareType: "square",
      cornerDotType: "square",
      mood: "Neutral",
      description: "Standard clean design."
    };
  }
}

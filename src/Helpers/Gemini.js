//Importing the GoogleGenAI Client from  Google Package
import { GoogleGenerativeAI } from "@google/generative-ai";
const GEN_AI_KEY = import.meta.env.GEN_AI_KEY;

// Initializing the client :- Creating an instance  of GoogleGenAI client
// - It’s configured with your API key so you can make requests to Gemini models.

const genAI = new GoogleGenerativeAI('AIzaSyAJpdEJGRinZvfWhNiwwZvIm5_vmu3piWI');

// This defines an async function called getGeminiModel.
// Inside, it calls genAI.getGenerativeModel with the model name 'gemini-2.5-flash'

const getGeminiModel = async () => {
  return genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
};

// This defines a function getMoviRecommendations that takes a watchList (probably an array of movies the user has already seen)
// It calls getGeminiModel() and stores the result in model.

export const getMovieRecommendations = async (watchList) => {
  try {
    const model = await getGeminiModel();
    const prompt = `Based on these movies in the user's watchlist: 
    ${  watchList.map((movie) => `- ${movie.title} `)  }
    
    Please recommend 5 similar movies. For each movie, provide:
    - Title
    - Brief reason why it's recommended
    - Confidence score (0-100)
    
    Return the response in this JSON format:
    {
      "recommendations": [
        {
          "title": "Movie Title",
          "reason": "Reason for recommendation",
          "confidence": 85
        }
      ]
    }`;

    const result = await model.generateContent(prompt);
    console.log(result);
    return JSON.parse(
      result.response
        .text()
        .replace(/```json|```/g, "")
        .trim()
    );
  } catch (error) {
    console.log("error in getMovieRecommendations : ", error);
  }
};
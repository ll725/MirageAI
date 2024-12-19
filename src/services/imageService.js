import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY
});

export const generateImage = async (pageText) => {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: pageText,
      n: 1,
      size: "1024x1024",
    });

    return response.data[0].url;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
};

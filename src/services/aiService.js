import OpenAI from 'openai';
import { generateImage } from './imageService';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY
});

export const generateStory = async (prompt, genre) => {
  const storyPrompt = `Write a 10-page ${genre} story based on: ${prompt}`;
  
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: storyPrompt }],
    });

    const story = completion.choices[0].message.content;
    const pages = story.split('\n\n').slice(0, 10);
    
    // Generate images for each page
    const pagesWithImages = await Promise.all(
      pages.map(async (pageText) => ({
        text: pageText,
        image: await generateImage(pageText)
      }))
    );

    return pagesWithImages;
  } catch (error) {
    console.error('Error generating story:', error);
    throw error;
  }
};

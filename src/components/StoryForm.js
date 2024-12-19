import React, { useState } from 'react';
import GenreSelector from './GenreSelector';
import { generateStory } from '../services/aiService';

const StoryForm = ({ onStoryGenerated }) => {
  const [prompt, setPrompt] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const story = await generateStory(prompt, genre);
    onStoryGenerated(story);
  };

  return (
    <form onSubmit={handleSubmit}>
      <GenreSelector onGenreSelect={setGenre} />
      <textarea 
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your story idea..."
      />
      <button type="submit">Generate Story</button>
    </form>
  );
};

export default StoryForm;

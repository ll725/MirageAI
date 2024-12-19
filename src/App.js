import React, { useState } from 'react';
import StoryForm from './components/StoryForm';
import StoryDisplay from './components/StoryDisplay';
import './styles/main.css';

function App() {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleStoryGenerated = async (generatedStory) => {
    try {
      setLoading(true);
      setError(null);
      setStory(generatedStory);
    } catch (err) {
      setError('Failed to generate story. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>AI Story Generator</h1>
      </header>
      <main>
        <StoryForm onStoryGenerated={handleStoryGenerated} />
        {loading && <div className="loading">Generating your story...</div>}
        {error && <div className="error">{error}</div>}
        {story && <StoryDisplay story={story} />}
      </main>
    </div>
  );
}

export default App;

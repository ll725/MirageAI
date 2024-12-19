import React, { useState } from 'react';
import PageView from './PageView';

const StoryDisplay = ({ story }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevPage = () => {
    setCurrentPage(Math.max(0, currentPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(Math.min(story.length - 1, currentPage + 1));
  };

  return (
    <div className="story-display">
      <PageView page={story[currentPage]} pageNumber={currentPage + 1} />
      
      <div className="navigation">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 0}
        >
          Previous Page
        </button>
        <span>Page {currentPage + 1} of {story.length}</span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === story.length - 1}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default StoryDisplay;

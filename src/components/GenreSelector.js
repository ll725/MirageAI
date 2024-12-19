import React from 'react';

const GenreSelector = ({ onGenreSelect }) => {
  const genres = [
    { id: 'scary', label: 'Horror/Scary' },
    { id: 'magical', label: 'Magical/Fantasy' },
    { id: 'futuristic', label: 'Sci-Fi/Futuristic' },
    { id: 'happy', label: 'Happy/Uplifting' },
    { id: 'sad', label: 'Sad/Drama' }
  ];

  return (
    <div className="genre-selector">
      <h3>Select Story Genre</h3>
      <div className="genre-options">
        {genres.map((genre) => (
          <button
            key={genre.id}
            className="genre-button"
            onClick={() => onGenreSelect(genre.id)}
          >
            {genre.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreSelector;

import React from 'react';

const PageView = ({ page, pageNumber }) => {
  if (!page) return null;

  return (
    <div className="page-view">
      <img 
        src={page.image} 
        alt={`Illustration for page ${pageNumber}`} 
        loading="lazy"
      />
      <div className="page-content">
        <h2>Page {pageNumber}</h2>
        <p>{page.text}</p>
      </div>
    </div>
  );
};

export default PageView;

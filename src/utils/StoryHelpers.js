export const formatStoryText = (text) => {
    return text.trim().replace(/\n{3,}/g, '\n\n');
  };
  
  export const estimateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };
  
  export const splitIntoPages = (story, pagesCount = 10) => {
    const paragraphs = story.split('\n\n');
    const pages = [];
    const paragraphsPerPage = Math.ceil(paragraphs.length / pagesCount);
  
    for (let i = 0; i < paragraphs.length; i += paragraphsPerPage) {
      pages.push(paragraphs.slice(i, i + paragraphsPerPage).join('\n\n'));
    }
  
    return pages;
  };
  
import React, { useState, useEffect } from 'react';
import NewsItem from './NewItem';

const NewBoard = ({ category }) => {
  const apiKey = process.env.REACT_APP_API_KEY; // Correctly fetch API key
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null); // Add error state
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        if (!apiKey) {
          throw new Error('API Key is undefined. Please check your .env file.');
        }
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category || 'general'}&apiKey=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch articles: ${response.statusText}`);
        }

        const data = await response.json();
        setArticles(data.articles || []); // Default to an empty array if undefined
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError(err.message);
      } finally {
        setIsLoading(false); // Ensure loading is stopped
      }
    };

    fetchArticles();
  }, [category, apiKey]);

  if (isLoading) {
    return <div className="text-center mt-4">Loading news...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-danger">Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-center mt-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <div className="text-center mt-4">No articles found.</div>
      )}
    </div>
  );
};

export default NewBoard;

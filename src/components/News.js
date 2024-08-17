import React from 'react';

const newsArticles = [
  {
    id: 1,
    title: "Exciting Match Results",
    content: "The latest match results from the weekend's games.",
    date: "2023-04-20",
    image: "https://www.goal.com/en-us/news/match-results/xyz.jpg" // Replace with actual match images
  },
  {
    id: 2,
    title: "Player Transfers Update",
    content: "Latest updates on player transfers in the league.",
    date: "2023-04-21",
    image: "https://www.goal.com/en-us/news/player-transfers/xyz.jpg" // Replace with actual transfer images
  },
  {
    id: 3,
    title: "Champions League Highlights",
    content: "Highlights from the latest Champions League matches.",
    date: "2023-04-22",
    image: "https://www.goal.com/en-us/news/champions-league-highlights/xyz.jpg" // Replace with actual highlight images
  }
];

function News() {
  return (
    <div>
      <h2>News</h2>
      {newsArticles.map(article => (
        <div key={article.id} className="news-article">
          <img src={article.image} alt={article.title} className="post-image" />
          <h3>{article.title}</h3>
          <p className="date">{article.date}</p>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default News;
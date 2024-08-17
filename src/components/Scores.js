import React, { useEffect, useState } from 'react';

function Scores() {
  const [liveScores, setLiveScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLiveScores = async () => {
      try {
        const response = await fetch('https://api.example.com/livescores'); // Replace with actual API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLiveScores(data.scores); // Adjust based on the API response structure
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveScores();
  }, []);

  if (loading) {
    return <div>Loading live scores...</div>;
  }

  if (error) {
    return <div>Error fetching live scores: {error}</div>;
  }

  return (
    <div>
      <h2>Live Scores</h2>
      {liveScores.length === 0 ? (
        <p>No live scores available.</p>
      ) : (
        <ul>
          {liveScores.map((match) => (
            <li key={match.id}>
              {match.homeTeam} {match.homeScore} - {match.awayScore} {match.awayTeam}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Scores;
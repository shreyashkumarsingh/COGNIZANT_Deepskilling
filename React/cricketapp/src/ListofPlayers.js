import React from 'react';

const players = [
  { name: 'Sachin Tendulkar', score: 95 },
  { name: 'Virat Kohli', score: 88 },
  { name: 'MS Dhoni', score: 72 },
  { name: 'Rohit Sharma', score: 65 },
  { name: 'Rahul Dravid', score: 82 },
  { name: 'Sourav Ganguly', score: 58 },
  { name: 'Virender Sehwag', score: 68 },
  { name: 'Yuvraj Singh', score: 75 },
  { name: 'Hardik Pandya', score: 62 },
  { name: 'Jasprit Bumrah', score: 45 },
  { name: 'Ravindra Jadeja', score: 78 }
];

export const ListofPlayers = () => {
  const lowScorers = players.filter((player) => player.score <= 70);

  return (
    <div style={{ padding: '20px' }}>
      <h1>List of Players</h1>
      <h3>All 11 Players</h3>
      <ul>
        {players.map((p, index) => (
          <li key={index}>
            Mr. {p.name} <span>{p.score}</span>
          </li>
        ))}
      </ul>
      <hr />
      <h3>List of Players having score less than 70</h3>
      <ul>
        {lowScorers.map((p, index) => (
          <li key={index}>
            Mr. {p.name} <span>{p.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;

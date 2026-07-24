import React from 'react';

const allPlayers = [
  'Sachin Tendulkar',
  'Virat Kohli',
  'MS Dhoni',
  'Rohit Sharma',
  'Rahul Dravid',
  'Sourav Ganguly'
];

const T20players = ['First T20 Player', 'Second T20 Player', 'Third T20 Player'];
const RanjiTrophy = ['First Ranji Player', 'Second Ranji Player', 'Third Ranji Player'];
const mergedPlayers = [...T20players, ...RanjiTrophy];

export const IndianPlayers = () => {
  const [p1, p2, p3, p4, p5, p6] = allPlayers;
  const oddPlayers = [p1, p3, p5];
  const evenPlayers = [p2, p4, p6];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Indian Players Details</h1>
      <h3>Odd Team Players (Destructuring)</h3>
      <ul>
        {oddPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>

      <h3>Even Team Players (Destructuring)</h3>
      <ul>
        {evenPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>

      <hr />
      <h3>List of Merged Players (Spread Operator)</h3>
      <ul>
        {mergedPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;

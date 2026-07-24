import React from 'react';
import { Link } from 'react-router-dom';

function Trainerlist({ trainers }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Trainers List</h2>
      <ul>
        {trainers.map((trainer) => (
          <li key={trainer.TrainerId} style={{ marginBottom: '10px' }}>
            <Link to={`/trainers/${trainer.TrainerId}`}>
              {trainer.Name} ({trainer.Technology})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trainerlist;

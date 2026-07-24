import React from 'react';
import { useParams, Link } from 'react-router-dom';

function TrainerDetails({ trainers }) {
  const { id } = useParams();
  const trainer = trainers.find((t) => t.TrainerId === parseInt(id, 10));

  if (!trainer) {
    return (
      <div style={{ padding: '20px' }}>
        <h3>Trainer not found!</h3>
        <Link to="/trainers">Back to Trainers List</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '500px', margin: '20px' }}>
      <h2>Trainer Details</h2>
      <p><b>ID:</b> {trainer.TrainerId}</p>
      <p><b>Name:</b> {trainer.Name}</p>
      <p><b>Email:</b> {trainer.Email}</p>
      <p><b>Phone:</b> {trainer.Phone}</p>
      <p><b>Technology:</b> {trainer.Technology}</p>
      <p><b>Skills:</b> {trainer.Skills.join(', ')}</p>
      <Link to="/trainers">← Back to Trainers List</Link>
    </div>
  );
}

export default TrainerDetails;

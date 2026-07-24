import React from 'react';

const flights = [
  { id: 'AI-101', flight: 'Air India', route: 'Delhi to Mumbai', price: '₹4,500' },
  { id: '6E-202', flight: 'IndiGo', route: 'Bengaluru to Hyderabad', price: '₹3,200' },
  { id: 'SG-303', flight: 'SpiceJet', route: 'Chennai to Kolkata', price: '₹4,100' }
];

export const GuestPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Guest Portal - Available Flight Schedule</h2>
      <p style={{ color: '#666' }}>Please log in to book flight tickets.</p>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0', textAlign: 'left' }}>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Flight No</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Airline</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Route</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((f) => (
            <tr key={f.id}>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{f.id}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{f.flight}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{f.route}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{f.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuestPage;

import React, { useState } from 'react';

export const UserPage = () => {
  const [selectedFlight, setSelectedFlight] = useState('');
  const [passenger, setPassenger] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingStatus(`Ticket successfully booked for ${passenger} on flight ${selectedFlight}! Ref: TKT${Math.floor(100000 + Math.random() * 900000)}`);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid green', borderRadius: '8px', marginTop: '10px' }}>
      <h2 style={{ color: 'green' }}>User Portal - Book Flight Ticket</h2>
      <form onSubmit={handleBooking}>
        <div style={{ marginBottom: '15px' }}>
          <label>Passenger Name: </label>
          <input
            type="text"
            value={passenger}
            onChange={(e) => setPassenger(e.target.value)}
            required
            style={{ padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Select Flight: </label>
          <select value={selectedFlight} onChange={(e) => setSelectedFlight(e.target.value)} required style={{ padding: '5px' }}>
            <option value="">-- Choose Flight --</option>
            <option value="AI-101 (Air India: Delhi to Mumbai)">AI-101 (Air India: Delhi to Mumbai)</option>
            <option value="6E-202 (IndiGo: Bengaluru to Hyderabad)">6E-202 (IndiGo: Bengaluru to Hyderabad)</option>
            <option value="SG-303 (SpiceJet: Chennai to Kolkata)">SG-303 (SpiceJet: Chennai to Kolkata)</option>
          </select>
        </div>
        <button type="submit" style={{ backgroundColor: 'darkgreen', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Confirm Booking
        </button>
      </form>
      {bookingStatus && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e6ffe6', color: 'darkgreen', border: '1px solid green' }}>
          {bookingStatus}
        </div>
      )}
    </div>
  );
};

export default UserPage;

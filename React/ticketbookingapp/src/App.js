import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: '#333', color: 'white', borderRadius: '5px' }}>
        <h1>Flight Ticket Booking App</h1>
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          style={{ padding: '8px 16px', backgroundColor: isLoggedIn ? '#ff4d4d' : '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </header>
      <main style={{ marginTop: '20px' }}>
        {isLoggedIn ? <UserPage /> : <GuestPage />}
      </main>
    </div>
  );
}

export default App;

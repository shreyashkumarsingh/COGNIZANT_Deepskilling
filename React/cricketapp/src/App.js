import React, { useState } from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App" style={{ padding: '20px' }}>
      <button
        onClick={() => setFlag(!flag)}
        style={{ padding: '10px 20px', marginBottom: '20px', cursor: 'pointer' }}
      >
        Toggle View (Current Flag: {flag.toString()})
      </button>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;

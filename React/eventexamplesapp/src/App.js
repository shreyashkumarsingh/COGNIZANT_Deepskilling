import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);

  const sayHello = () => {
    alert('Hello! Welcome to React Event Handling.');
  };

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
    sayHello();
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  const sayWelcome = (msg) => {
    alert(`Message: ${msg}`);
  };

  const handleSyntheticEvent = (e) => {
    alert(`Synthetic Event Triggered: I was clicked! (Event type: ${e.type})`);
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Event Handling Examples</h1>
      
      <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px' }}>
        <h3>Counter: {counter}</h3>
        <button onClick={handleIncrement} style={{ marginRight: '10px', padding: '8px 15px' }}>
          Increment & Say Hello
        </button>
        <button onClick={handleDecrement} style={{ padding: '8px 15px' }}>
          Decrement
        </button>
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px' }}>
        <h3>Custom Parameter Event</h3>
        <button onClick={() => sayWelcome('welcome')} style={{ padding: '8px 15px' }}>
          Say Welcome
        </button>
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px' }}>
        <h3>Synthetic Event Handling</h3>
        <button onClick={handleSyntheticEvent} style={{ padding: '8px 15px' }}>
          OnPress Event
        </button>
      </div>

      <CurrencyConvertor />
    </div>
  );
}

export default App;

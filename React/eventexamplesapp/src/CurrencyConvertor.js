import React, { useState } from 'react';

export const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inr = parseFloat(rupees);
    if (!isNaN(inr)) {
      // 1 EUR approx 90 INR
      const converted = (inr / 90).toFixed(2);
      setEuros(converted);
    } else {
      setEuros(null);
    }
  };

  return (
    <div style={{ padding: '15px', border: '1px solid green', borderRadius: '8px', marginTop: '20px', maxWidth: '400px' }}>
      <h3>Currency Convertor (INR → EUR)</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Amount in INR: </label>
          <input
            type="number"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
            placeholder="Enter rupees"
            required
          />
        </div>
        <button type="submit" style={{ backgroundColor: 'green', color: 'white', padding: '5px 15px', cursor: 'pointer' }}>
          Convert
        </button>
      </form>
      {euros !== null && (
        <h4 style={{ marginTop: '15px', color: 'darkgreen' }}>
          Equivalent Euros: €{euros}
        </h4>
      )}
    </div>
  );
};

export default CurrencyConvertor;

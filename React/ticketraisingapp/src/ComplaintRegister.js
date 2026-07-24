import React, { useState } from 'react';

export const ComplaintRegister = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');
  const [refNumber, setRefNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = 'REF' + Math.floor(100000 + Math.random() * 900000);
    setRefNumber(generatedRef);
    alert(`Thanks ${employeeName}! Your complaint was submitted successfully.\nReference No: ${generatedRef}`);
  };

  return (
    <div style={{ padding: '25px', border: '2px solid navy', borderRadius: '10px', maxWidth: '450px', margin: '20px auto' }}>
      <h2 style={{ color: 'navy', textAlign: 'center' }}>Register a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Employee Name:</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder="Enter employee name"
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Complaint Details:</label>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Describe your issue here..."
            rows={4}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <button
          type="submit"
          style={{ width: '100%', backgroundColor: 'navy', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Submit Complaint
        </button>
      </form>
      {refNumber && (
        <div style={{ marginTop: '20px', padding: '12px', backgroundColor: '#eef', border: '1px solid navy', borderRadius: '5px', textAlign: 'center' }}>
          <h4>Reference Number Generated:</h4>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'darkblue' }}>{refNumber}</p>
        </div>
      )}
    </div>
  );
};

export default ComplaintRegister;

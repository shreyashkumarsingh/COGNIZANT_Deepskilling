import React from 'react';

const officeSpaces = [
  {
    Name: 'DBS Cyber Tech Park',
    Rent: 55000,
    Address: 'HITEC City, Hyderabad',
    Image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80'
  },
  {
    Name: 'Cognizant Technopolis',
    Rent: 75000,
    Address: 'DLF IT Park, Chennai',
    Image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=300&q=80'
  },
  {
    Name: 'Regus Business Center',
    Rent: 48000,
    Address: 'MG Road, Bengaluru',
    Image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80'
  }
];

function App() {
  const pageHeading = <h1>Office Space Rental Portal</h1>;

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {pageHeading}
      <h2>Featured Office Spaces</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {officeSpaces.map((office, index) => {
          const rentStyle = {
            color: office.Rent < 60000 ? 'red' : 'green',
            fontWeight: 'bold'
          };

          return (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '15px',
                width: '300px',
                backgroundColor: '#fafafa'
              }}
            >
              <img
                src={office.Image}
                alt={office.Name}
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '5px' }}
              />
              <h3>{office.Name}</h3>
              <p>
                <b>Address:</b> {office.Address}
              </p>
              <p>
                <b>Rent:</b> <span style={rentStyle}>₹{office.Rent} / month</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

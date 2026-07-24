import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import EmployeeList from './EmployeeList';

const employeesData = [
  { id: 101, name: 'Alice Johnson', role: 'Software Engineer' },
  { id: 102, name: 'Bob Smith', role: 'DevOps Architect' },
  { id: 103, name: 'Carol Williams', role: 'UI/UX Designer' }
];

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Apps Centric Solutions - Employee Portal</h1>
        <button onClick={toggleTheme} style={{ padding: '10px 20px', marginBottom: '20px', cursor: 'pointer' }}>
          Toggle Theme (Current: {theme.toUpperCase()})
        </button>
        <EmployeeList employees={employeesData} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

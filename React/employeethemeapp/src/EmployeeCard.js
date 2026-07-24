import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

export const EmployeeCard = ({ employee }) => {
  const theme = useContext(ThemeContext);

  const buttonStyle = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: theme === 'dark' ? '#333' : '#e0e0e0',
    color: theme === 'dark' ? '#fff' : '#000'
  };

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#fefefe',
    color: theme === 'dark' ? '#ffffff' : '#000000'
  };

  return (
    <div style={cardStyle} className={`employee-card ${theme}`}>
      <h4>{employee.name}</h4>
      <p><b>Role:</b> {employee.role}</p>
      <button style={buttonStyle} className={`btn btn-${theme}`}>
        Action ({theme.toUpperCase()} Theme)
      </button>
    </div>
  );
};

export default EmployeeCard;

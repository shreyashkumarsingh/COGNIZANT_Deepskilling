import React from 'react';
import EmployeeCard from './EmployeeCard';

export const EmployeeList = ({ employees }) => {
  return (
    <div style={{ padding: '10px' }}>
      <h3>Employee Directory</h3>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};

export default EmployeeList;

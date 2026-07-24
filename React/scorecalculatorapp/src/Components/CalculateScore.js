import React from 'react';
import '../Stylesheets/mystyle.css';

function percentToDecimal(decimal) {
  return (decimal * 100).toFixed(2) + '%';
}

function calcScore(total, goal) {
  return percentToDecimal(total / goal);
}

export const CalculateScore = ({ Name, School, Total, goal }) => {
  return (
    <div className="formatstyle">
      <h1>Student Details</h1>
      <div className="Name">
        <b>Name:</b> <span>{Name}</span>
      </div>
      <div className="School">
        <b>School:</b> <span>{School}</span>
      </div>
      <div className="Total">
        <b>Total:</b> <span>{Total}</span>
      </div>
      <div className="Score">
        <b>Score:</b> <span>{calcScore(Total, goal)}</span>
      </div>
    </div>
  );
};

export default CalculateScore;

import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        Name="Steave"
        School="D.A.V Public School"
        Total={284}
        goal={300}
      />
    </div>
  );
}

export default App;

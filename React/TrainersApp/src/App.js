import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Trainerlist from './Trainerlist';
import TrainerDetails from './TrainerDetails';
import trainersData from './TrainersMock';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ padding: '15px', backgroundColor: '#f4f4f4', marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
          <Link to="/trainers" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Trainers List</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<Trainerlist trainers={trainersData} />} />
          <Route path="/trainers/:id" element={<TrainerDetails trainers={trainersData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

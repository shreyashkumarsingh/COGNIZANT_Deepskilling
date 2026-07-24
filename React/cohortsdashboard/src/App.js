import React from 'react';
import CohortDetails from './CohortDetails';

const cohortsData = [
  {
    cohortCode: 'INTADM20DF001',
    technology: 'Full Stack .NET',
    startDate: '2026-01-15',
    status: 'Ongoing',
    coach: 'John Doe'
  },
  {
    cohortCode: 'INTADM20JAVA02',
    technology: 'Java Microservices',
    startDate: '2025-11-01',
    status: 'Completed',
    coach: 'Jane Smith'
  },
  {
    cohortCode: 'INTADM20REA03',
    technology: 'React Developer',
    startDate: '2026-02-10',
    status: 'Ongoing',
    coach: 'Alex Johnson'
  }
];

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Academy Cohorts Dashboard</h1>
      <div>
        {cohortsData.map((cohort) => (
          <CohortDetails key={cohort.cohortCode} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;

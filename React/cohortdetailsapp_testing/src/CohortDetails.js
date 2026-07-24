import React from 'react';

export const CohortDetails = ({ cohort }) => {
  if (!cohort) return null;

  return (
    <div className="box" style={{ border: '1px solid black', padding: '15px', borderRadius: '10px', width: '300px' }}>
      <h3 style={{ color: cohort.status === 'Ongoing' ? 'green' : 'blue' }}>
        {cohort.cohortCode}
      </h3>
      <dl>
        <dt style={{ fontWeight: 500 }}>Technology Stream</dt>
        <dd>{cohort.technology}</dd>
        <dt style={{ fontWeight: 500 }}>Start Date</dt>
        <dd>{cohort.startDate}</dd>
        <dt style={{ fontWeight: 500 }}>Status</dt>
        <dd>{cohort.status}</dd>
        <dt style={{ fontWeight: 500 }}>Coach</dt>
        <dd>{cohort.coach}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;

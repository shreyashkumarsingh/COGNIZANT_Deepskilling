import React from 'react';
import styles from './CohortDetails.module.css';

export const CohortDetails = ({ cohort }) => {
  const isOngoing = cohort.status.toLowerCase() === 'ongoing';
  const headerStyle = {
    color: isOngoing ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={headerStyle}>{cohort.cohortCode}</h3>
      <dl>
        <dt>Technology Stream</dt>
        <dd>{cohort.technology}</dd>
        <dt>Start Date</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Status</dt>
        <dd>{cohort.status}</dd>
        <dt>Coach</dt>
        <dd>{cohort.coach}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;

import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const Voting = () => {
  const candidates = [
    { id: 1, name: 'Jane Doe', university: 'University A' },
    { id: 2, name: 'John Smith', university: 'University B' },
    // Add more candidates
  ];

  const handleVote = (candidate) => {
    console.log('Voted for:', candidate);
    // Implement voting logic here
  };

  return (
    <ListGroup>
      {candidates.map(candidate => (
        <ListGroup.Item key={candidate.id} className="d-flex justify-content-between align-items-center">
          {candidate.name} - {candidate.university}
          <Button variant="primary" onClick={() => handleVote(candidate)}>Vote</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Voting;

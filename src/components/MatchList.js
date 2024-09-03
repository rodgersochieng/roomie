import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const MatchList = ({ matches }) => {
  const handleMatchSelect = (match) => {
    console.log('Selected match:', match);
    // Implement the logic for selecting a match
  };

  return (
    <ListGroup>
      {matches.map(match => (
        <ListGroup.Item key={match.id} className="d-flex justify-content-between align-items-center">
          {match.name} - {match.university}
          <Button variant="primary" onClick={() => handleMatchSelect(match)}>Select</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default MatchList;

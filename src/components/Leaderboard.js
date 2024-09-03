import React from 'react';
import { Table } from 'react-bootstrap';

const Leaderboard = () => {
  const winners = [
    { month: 'August 2024', university: 'University A', name: 'Jane Doe' },
    { month: 'July 2024', university: 'University B', name: 'John Smith' },
    // Add more winners
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Month</th>
          <th>University</th>
          <th>Winner</th>
        </tr>
      </thead>
      <tbody>
        {winners.map((winner, index) => (
          <tr key={index}>
            <td>{winner.month}</td>
            <td>{winner.university}</td>
            <td>{winner.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Leaderboard;

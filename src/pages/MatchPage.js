import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MatchList from '../components/MatchList';

const MatchPage = () => {
  const [matches, setMatches] = useState([
    { id: 1, name: 'Alice', university: 'University A' },
    { id: 2, name: 'Bob', university: 'University B' },
    // Add more matches
  ]);

  return (
    <Container className="my-5">
      <h2 className="text-center text-primary">Find a Roommate</h2>
      <Row className="mt-4">
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <MatchList matches={matches} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MatchPage;

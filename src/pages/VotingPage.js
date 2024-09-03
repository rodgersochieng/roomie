import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Voting from '../components/Voting';

const VotingPage = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center text-primary">Vote for Mr./Mrs. University</h2>
      <Row className="mt-4">
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Voting />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VotingPage;

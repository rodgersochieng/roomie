import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Leaderboard from '../components/Leaderboard';

const LeaderboardPage = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center text-primary">Leaderboard - Mr./Mrs. University</h2>
      <Row className="mt-4">
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Leaderboard />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LeaderboardPage;

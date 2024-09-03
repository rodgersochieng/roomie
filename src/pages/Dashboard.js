import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center text-primary">Dashboard</h2>
      <Row className="mt-4">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Find a Roommate</Card.Title>
              <Card.Text>Connect with other students and find your perfect roommate.</Card.Text>
              <Button variant="primary" href="/match" block>Find Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Marketplace</Card.Title>
              <Card.Text>Buy and sell items within your university community.</Card.Text>
              <Button variant="primary" href="/marketplace" block>Explore Marketplace</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Vote Mr./Mrs. University</Card.Title>
              <Card.Text>Cast your vote for the best candidates in your university.</Card.Text>
              <Button variant="primary" href="/voting" block>Vote Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

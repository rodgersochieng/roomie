import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="text-center my-5">
      <Row>
        <Col>
          <h1 className="display-4 text-primary">Welcome to Roomie</h1>
          <p className="lead">Find your perfect roommate and connect with your university community.</p>
          <Button variant="primary" size="lg" href="/dashboard">
            Get Started
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

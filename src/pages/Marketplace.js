import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PostItem from '../components/PostItem';

const Marketplace = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center text-primary">Marketplace</h2>
      <Row className="mt-4">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Post an Item</Card.Title>
              <PostItem />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Explore Marketplace</Card.Title>
              <Card.Text>See what other students are selling.</Card.Text>
              <Button variant="primary" href="/marketplace/explore" block>Explore Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Marketplace;

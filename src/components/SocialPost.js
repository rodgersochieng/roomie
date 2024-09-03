import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const SocialPost = () => {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePostChange = (e) => {
    setPost(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (post) {
      setPosts([...posts, post]);
      setPost('');
    }
  };

  return (
    <div>
      <Card className="mb-4">
        <Card.Body>
          <Form onSubmit={handlePostSubmit}>
            <Form.Group>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="What's on your mind?" 
                value={post}
                onChange={handlePostChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">Post</Button>
          </Form>
        </Card.Body>
      </Card>

      <div>
        {posts.map((p, index) => (
          <Card key={index} className="mb-4">
            <Card.Body>{p}</Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SocialPost;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PostItem = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Item posted:', { title, description, file });
    // Implement post item logic here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter item title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter item description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          required
        />
      </Form.Group>

      <Form.Group controlId="formFile">
        <Form.Label>Upload Video/Reel/Text</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" block>
        Post Item
      </Button>
    </Form>
  );
};

export default PostItem;

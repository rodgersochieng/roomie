import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const ProfileForm = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    university: '',
    bio: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/profiles', formData);
      console.log('Profile created:', response.data);
      // Handle successful profile creation (e.g., redirect to dashboard)
      handleClose();
    } catch (error) {
      console.error('Error creating profile:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Profile
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formAge" className="mt-3">
              <Form.Label>Age</Form.Label>
              <Form.Control 
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                required
              />
            </Form.Group>

            <Form.Group controlId="formGender" className="mt-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control 
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formUniversity" className="mt-3">
              <Form.Label>University</Form.Label>
              <Form.Control 
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
                placeholder="Enter your university"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBio" className="mt-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control 
                as="textarea"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself"
                rows={3}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Create Profile
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileForm;

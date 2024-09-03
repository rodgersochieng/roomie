import React from 'react';
import { Container, Card } from 'react-bootstrap';
import ProfileForm from '../components/ProfileForm';

const ProfilePage = () => {
  const handleProfileSubmit = (profileData) => {
    console.log('Profile updated:', profileData);
    // Implement profile update logic here
  };

  return (
    <Container className="my-5">
      <Card>
        <Card.Body>
          <Card.Title className="text-primary">Your Profile</Card.Title>
          <ProfileForm onSubmit={handleProfileSubmit} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfilePage;

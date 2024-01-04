import React from 'react';
import axios from 'axios';
import './ComposeScoopPage.css';
import ScoopForm from './ScoopForm';

const ComposeScoopPage = () => {
  const handleSubmit = async (values) => {
    try {
      // Make a POST request to your backend
      const response = await axios.post('/api/scoop/post', values);

      // Log the response or handle it as needed
      console.log('Scoop submitted successfully:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error submitting scoop:', error.message);
    }
  };

  return (
    <div className="compose-scoop-page">
      <h1>Compose Scoop</h1>
      <ScoopForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ComposeScoopPage;

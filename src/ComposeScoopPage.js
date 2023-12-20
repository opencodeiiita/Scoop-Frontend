import React from 'react';
import './ComposeScoopPage.css';
import ScoopForm from './ScoopForm';

const ComposeScoopPage = () => {
  const handleSubmit = values => {
    // Handle submission logic here
    console.log('Form submitted with values:', values);
  };

  return (
    <div className="compose-scoop-page">
      <h1>Compose Scoop</h1>
      <ScoopForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ComposeScoopPage;

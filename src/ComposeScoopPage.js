import React from 'react';
import './ComposeScoopPage.css';
import ScoopForm from './ScoopForm';
import { Link } from 'react-router-dom';
const ComposeScoopPage = () => {
  const userDetails=JSON.parse(localStorage.getItem('user'));
  const handleSubmit = values => {
    // Handle submission logic here
    console.log('Form submitted with values:', values);
  };

  return (
    userDetails ?
    <div className="compose-scoop-page">
      <h1>Compose Scoop</h1>
      <ScoopForm onSubmit={handleSubmit} />
    </div>:
    <Link to={"/signup"}><h1>LOGIN/REGISTER</h1></Link>
  );
};

export default ComposeScoopPage;

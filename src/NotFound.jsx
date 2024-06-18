import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h3>Ohh!!</h3>
      <h3>We are not able to find the page for the given URL.</h3>
      <Link to="/">Navigate Home</Link>
    </div>
  );
};

export default NotFound;

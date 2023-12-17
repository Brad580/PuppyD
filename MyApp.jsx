/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { puppyList } from './data.js';
import './App.css';
const MyApp = () => {
  const [puppies] = useState(puppyList);
  const [selectedPuppy, setSelectedPuppy] = useState(null);

  const handleClick = (puppy) => {
    setSelectedPuppy(puppy);
  };

  return (
    <div className="MyApp">
      <div className="puppy-list">
        {puppies.map((puppy) => (
          <p key={puppy.id} onClick={() => handleClick(puppy)}>
            {puppy.name}
          </p>
        ))}
      </div>
      <div className="featured-puppy">
        {selectedPuppy ? (
          <>
            <h2>{selectedPuppy.name}</h2>
            <p>Breed: {selectedPuppy.breed}</p>
            <p>Age: {selectedPuppy.age}</p>
            {/* Add more details as needed */}
          </>
        ) : (
          <p>Select a puppy from the list to view details.</p>
        )}
      </div>
    </div>
  );
};

export default MyApp;

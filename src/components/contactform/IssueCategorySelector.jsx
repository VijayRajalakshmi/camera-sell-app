// src/components/ContactForm/IssueCategorySelector.js

import React from 'react';

// This is the component that guides users to the right support channel.
const IssueCategorySelector = () => {
  return (
    <div className="issue-selector-container">
      {/* This is a placeholder. In a complete demo, 
        this would contain clickable tabs/pills like:
        "My Order Status", "New Quote Query", etc.
      */}
      <p className="selector-instruction">
        For faster service, select the type of inquiry you have:
      </p>
      
      <div className="category-buttons">
          <button className="category-button">Order Status</button>
          <button className="category-button">New Quote</button>
          <button className="category-button">Partnership</button>
      </div>
      
    </div>
  );
};

export default IssueCategorySelector; // Must be exported
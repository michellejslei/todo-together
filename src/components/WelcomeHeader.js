import React from 'react';
import './Header.css';

const WelcomeHeader = ({ userName }) => {
    return (
      <header className="header">
        <h1>Hello, {userName}</h1>
      </header>
    );
  };
  
  export default WelcomeHeader;
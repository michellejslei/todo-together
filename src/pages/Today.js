import React from 'react';
import WelcomeHeader from '../components/WelcomeHeader.js'; 
// import './Today.css'; 

const Today = () => {
  return (
    <div className="today-page">
      <WelcomeHeader userName="Michelle" />
      {/* Rest of the today page content */}
    </div>
  );
};

export default Today;
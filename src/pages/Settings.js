import React from 'react';
import Header from '../components/Header.js'; 
import './Settings.css'; 

const Settings = () => {
  return (
    <div className="settings-page">
      <Header title="Settings" />

      <div className="settings-container">
        <div className="profile-picture">
          <div className="picture-placeholder"></div>
          {/* img tag */}
        </div>

        <form className="settings-form">
          <div className="input-group">
            <label htmlFor="firstName">first name</label>
            <input type="text" id="firstName" name="firstName" defaultValue="Michelle" />
          </div>

          <div className="input-group">
            <label htmlFor="lastName">last name</label>
            <input type="text" id="lastName" name="lastName" defaultValue="L" />
          </div>

          <div className="input-group">
            <label htmlFor="email">email address</label>
            <input type="email" id="email" name="email" defaultValue="michelle@test.com" />
          </div>

          <div className="input-group">
            <label htmlFor="phone">number</label>
            <input type="tel" id="phone" name="phone" defaultValue="604-xxx-xxxx" />
          </div>

          <button className="log-out">log out</button>
        </form>
      </div>

      <div className="action-buttons">
        <button className="edit-profile">edit profile</button>
        <button className="save-button">save</button>
      </div>
    </div>
  );
};

export default Settings;
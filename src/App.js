import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Navbar from './components/Navbar';
import Today from './pages/Today';
import Feed from './pages/Feed';
import Challenges from './pages/Challenges';
import Calendar from './pages/Calendar';
import Friends from './pages/Friends';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Today />} />
        <Route path="/today" element={<Today />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/settings" element={<Settings />} />
      </Routes> 
    </Router>
  );
}

export default App;

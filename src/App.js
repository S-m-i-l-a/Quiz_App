import React, { useState } from 'react';
import './App.css'; // Global styles
import Quiz from './components/Quiz';
import Menu from './components/Menu';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import Categories from './components/Category'; // Import Categories component
import Feedback from './components/feedback'; // Import Feedback component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [userScore, setUserScore] = useState(40); // Initialize the user score

  // Function to update the user's score
  const updateScore = (newScore) => {
    setUserScore(newScore);
  };

  return (
    <Router>
      <div className="App">
        <Menu /> {/* This will be placed at the top */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/leaderboard" 
              element={<Leaderboard userScore={userScore} />} 
            />
            <Route path="/categories" element={<Categories />} />
            <Route path="/quiz" element={<Quiz updateScore={updateScore} />} />
            <Route path="/feedback" element={<Feedback />} /> {/* Add Feedback Route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

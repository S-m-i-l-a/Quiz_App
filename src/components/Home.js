import React, { useState } from 'react';
import '../styles/Home.css';
import Category from './Category';
import Leaderboard from './Leaderboard';
import Feedback from './feedback'; // Import Feedback component
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Home = () => {
  const [activePage, setActivePage] = useState('home');

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="home-container">
      <div className="sidebar">
        <h2>Quiz App</h2>
        <ul>
          <li onClick={() => handleMenuClick('home')}>Home</li>
          <li onClick={() => handleMenuClick('leaderboard')}>Leaderboard</li>
          <li onClick={() => handleMenuClick('category')}>Categories</li>
          <li onClick={() => handleMenuClick('feedback')}>FeedBack</li> {/* Link to Feedback */}
        </ul>
      </div>
      <div className="content">
        {activePage === 'home' && (
          <div className="home-content">
            <h1>Welcome to the Quiz App</h1>
            <p>
              Test your knowledge with our fun and engaging quizzes. Select a category, take the quiz, and see how you rank on the leaderboard.
            </p>

            <section className="features">
              <h2>Features</h2>
              <p>
                <li><strong>Variety of Categories:</strong> Choose from different topics and challenge yourself.</li>
                <li><strong>Leaderboard:</strong> Track your progress and compare with others.</li>
                <li><strong>Interactive Quizzes:</strong> Take quizzes with immediate feedback on your answers.</li>
                <li><strong>Fun and Educational:</strong> Learn new things while having fun!</li>
              </p>
            </section>

            <section className="how-it-works">
              <h2>How It Works</h2>
              <p>
                1. Choose a category.<br />
                2. Answer the questions.<br />
                3. See your score and check the leaderboard.<br />
                4. Share your results with friends!
              </p>
            </section>

            <section className="get-started">
              <h2>Ready to Get Started?</h2>
              <p>
                Select a category from the sidebar and begin your quiz journey. See how well you can do!
              </p>
            </section>
          </div>
        )}
        {activePage === 'leaderboard' && <Leaderboard />}
        {activePage === 'category' && <Category />}
        {activePage === 'feedback' && <Feedback />} {/* Display Feedback component */}
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import '../styles/Leaderboard.css';

const Leaderboard = () => {
  // Initial leaderboard data
  const [leaderboardData, setLeaderboardData] = useState([
    { name: 'Alice', score: 80 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 70 },
    { name: 'David', score: 60 },
    { name: 'Eve', score: 55 },
  ]);

  // Assuming the initial score of the user is 40
  const [currentUser, setCurrentUser] = useState({ name: 'Ehll Smila', score: 75 });

  // Add the current user's score to the leaderboard and sort it
  const updatedLeaderboardData = [...leaderboardData, currentUser];
  updatedLeaderboardData.sort((a, b) => b.score - a.score);

  // Handle name edit state
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(currentUser.name);

  // Handle name change input
  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  // Save the edited name
  const saveName = () => {
    setCurrentUser((prevState) => ({ ...prevState, name: editedName }));
    setIsEditing(false);
  };

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {updatedLeaderboardData.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {isEditing && player.name === currentUser.name ? (
                  <input
                    type="text"
                    value={editedName}
                    onChange={handleNameChange}
                    className="name-input"
                  />
                ) : (
                  player.name
                )}
              </td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditing && (
        <button onClick={saveName} className="save-button">
          Save Name
        </button>
      )}
      {!isEditing && currentUser.name === editedName && (
        <button onClick={() => setIsEditing(true)} className="edit-button">
          Edit Name
        </button>
      )}
    </div>
  );
};

export default Leaderboard;

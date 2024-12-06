import React, { useState } from 'react';
import '../styles/feedback.css'; // Import styling

const Feedback = () => {
  const [rating, setRating] = useState(0); // Rating state
  const [comments, setComments] = useState(''); // Comments state
  const [submitted, setSubmitted] = useState(false); // Flag for submission

  // Handle rating click
  const handleRatingClick = (ratingValue) => {
    setRating(ratingValue); // Set the rating based on star clicked
  };

  // Handle comment change
  const handleCommentsChange = (e) => {
    setComments(e.target.value); // Update comments state
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Submitted:', { rating, comments }); // Console log for now
    setSubmitted(true); // Display thank you message
  };

  return (
    <div className="feedback-container">
      <h2>Feedback</h2>
      {submitted ? (
        <div className="thank-you-message">
          <h3>Thank you for your feedback!</h3>
          <p>We appreciate your input and will use it to improve our app.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= rating ? 'selected' : ''}`}
                  onClick={() => handleRatingClick(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="comments">Your Comments:</label>
            <textarea
              id="comments"
              value={comments}
              onChange={handleCommentsChange}
              placeholder="Enter your feedback here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default Feedback;

import React from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa"; // Imported React Icons
import "./Testimonials.css";

const customerReviews = [
  { id: 1, name: "Ravi Sharma", city: "New Delhi", text: "Great service! Got cash instantly at my doorstep, and the executive was very polite and professional.", rating: 5 },
  { id: 2, name: "John Varghese", city: "Bengaluru", text: "Very professional and fast. The price quote was fair, and the process took less than 15 minutes. Highly recommended!", rating: 5 },
  { id: 3, name: "Meena Joshi", city: "Mumbai", text: "The pickup was smooth and on time. The team is trustworthy; no bargaining, just instant digital payment.", rating: 5 },
  { id: 4, name: "K. Reddy", city: "Hyderabad", text: "Sold my old camera lens. The online evaluation was accurate, and the final payment matched the quote perfectly.", rating: 5 },
];

/**
 * A dedicated component for a single, uniquely styled review card.
 */
const ReviewCard = ({ name, city, text, rating }) => (
  <div className="review-card">
    <div className="review-header">
      {/* Dynamic Star Rating based on the 'rating' prop */}
      <div className="star-rating" aria-label={`Rated ${rating} out of 5 stars`}>
        {Array(5).fill().map((_, i) => (
          <FaStar key={i} className="star-icon" />
        ))}
      </div>
      <FaQuoteRight className="quote-icon" />
    </div>

    <p className="review-text">
      {text}
    </p>

    <div className="review-author">
      <span className="author-name">{name}</span>
      <span className="author-city">{city}</span>
    </div>
  </div>
);


export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">Trusted by Thousands. Read Our Real Customer Reviews.</h2>
      <div className="review-grid">
        {customerReviews.map(review => (
          <ReviewCard 
            key={review.id} 
            name={review.name}
            city={review.city}
            text={review.text}
            rating={review.rating} // Pass rating prop (currently always 5 for initial trust building)
          />
        ))}
      </div>
    </section>
  );
}
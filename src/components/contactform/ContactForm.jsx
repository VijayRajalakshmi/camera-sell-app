import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Details Submitted:', formData);
    // In a real application, you would send this data to an API here.
    alert(`Thank you, ${formData.name}! We've received your details.`);
    setFormData({ name: '', phone: '', email: '' });
  };

  // Reusable component for a Social Media Icon
  const SocialIcon = ({ href, icon, platform }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={`Follow us on ${platform}`}>
      {/* Replace this SVG with your preferred icon library (e.g., Font Awesome) */}
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d={icon} />
      </svg>
    </a>
  );

  return (
    <div className="contact-container">
      {/* Left Pane: Simple, High-Impact Branding */}
      <div className="contact-info-panel">
        <div className="info-content">
          <h1>Get in Touch</h1>
          <p>We're ready to assist with urgent support or high-value inquiries. Fill in your details and we'll call you back.</p>
          
          <div className="social-links">
            <SocialIcon 
              href="https://www.instagram.com/client" 
              platform="Instagram"
              icon="M7.8 2h8.4C17.65 2 20 4.35 20 7.8v8.4c0 3.45-2.35 5.8-5.8 5.8H7.8C4.35 22 2 19.65 2 16.2V7.8C2 4.35 4.35 2 7.8 2zm0 2A3.8 3.8 0 004 7.8v8.4A3.8 3.8 0 007.8 20h8.4A3.8 3.8 0 0020 16.2V7.8A3.8 3.8 0 0016.2 4H7.8zm9.5 2.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-5.3 2.8c-2.32 0-4.2 1.88-4.2 4.2s1.88 4.2 4.2 4.2 4.2-1.88 4.2-4.2-1.88-4.2-4.2-4.2zm0 2.4a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6z"
            />
            <SocialIcon 
              href="https://www.twitter.com/client" 
              platform="Twitter"
              icon="M22.46 6c-.95.42-1.98.7-3.04.81.99-.59 1.75-1.54 2.1-2.65-.93.55-1.96.95-3.07 1.16C17.15 4.8 15.9 4.2 14.5 4.2c-2.73 0-4.95 2.22-4.95 4.95 0 .39.04.77.11 1.14-4.11-.2-7.75-2.17-10.2-5.18-.42.72-.66 1.56-.66 2.46 0 1.7.87 3.2 2.19 4.09-.81-.03-1.57-.25-2.23-.62v.06c0 2.39 1.7 4.37 3.95 4.82-.41.11-.85.17-1.3.17-.32 0-.64-.03-.95-.09.62 1.95 2.42 3.37 4.56 3.41-1.68 1.32-3.8 2.1-6.11 2.1-.4 0-.79-.02-1.18-.07 2.17 1.39 4.76 2.2 7.54 2.2 9.05 0 14-7.51 14-14.02 0-.21-.01-.43-.02-.64.96-.69 1.79-1.55 2.45-2.54z"
            />
            <SocialIcon 
              href="https://www.linkedin.com/client" 
              platform="LinkedIn"
              icon="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM4 9h4v12H4V9zm-2-4a2 2 0 114 0 2 2 0 01-4 0z"
            />
          </div>
        </div>
      </div>
      
      {/* Right Pane: The Minimal Contact Form */}
      <div className="contact-form-panel">
        <h2>Submit Your Details</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Request a Callback
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
import React from 'react';
import './AboutUs.css'; // Don't forget to import the styles

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-header">
        <h1>Sell Your Gadgets, Securely. That's Our Promise.</h1>
        <p>
          We are India's most trusted platform for converting your used electronics—from DSLRs to Laptops—into instant cash. Built on **transparency, technology, and zero hassle.**
        </p>
      </header>

      <hr />

      {/* Section 1: The Core Problem & Our Solution */}
      <section className="about-section mission-section">
        <h2>The Zero-Friction Selling Experience 🤝</h2>
        <p className="section-content">
          Tired of endless negotiation, low-ball offers, and meeting strangers? We understand. Our mission is simple: provide a professional, seamless, and secure channel for you to unlock the true value of your device without the risk. We manage the logistics, the diagnostics, and the security, so you just get paid.
        </p>
        
        <div className="mission-points">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>**Highest Value Guarantee:** Our data-driven process ensures market-best pricing.</li>
            <li>**Certified Data Wiping:** Your privacy is non-negotiable.</li>
            <li>**Instant On-the-Spot Payment:** No waiting games or transfer delays.</li>
          </ul>
        </div>
      </section>

      <hr />

      {/* Section 2: Technology - The Science of Valuation */}
      <section className="about-section tech-section">
        <h2>The Science Behind Your Quote 🤖</h2>
        <p className="section-content">
          We use proprietary valuation algorithms to assess your devices, ensuring accuracy and consistency that manual appraisals can't match.
        </p>
        <div className="tech-features-grid">
          <div className="tech-card">
            <h4>Precision AI Pricing</h4>
            <p>Our **Machine Learning** model analyzes current auction prices, local demand, and depreciation curves to give you a quote derived from millions of market data points, not guesswork.</p>
          </div>
          <div className="tech-card">
            <h4>Transparent Deductions</h4>
            <p>Every small scratch, faulty battery cycle, or missing accessory leads to a **clear, itemized deduction**. The price you see is the price you get, conditional on your honest assessment.</p>
          </div>
          <div className="tech-card">
            <h4>Dedicated Camera Expertise</h4>
            <p>For cameras and lenses, our system specifically factors in **shutter count, sensor condition, and optical clarity**—metrics general electronics buyers often overlook—to give your gear its fair market value.</p>
          </div>
        </div>
      </section>

      <hr />

      {/* Section 3: Security and Impact */}
      <section className="about-section impact-section">
        <h2>Security, Sustainability, and Our Impact ✨</h2>
        <p className="section-content">
          Every device sold to us is an investment in safety and sustainability. We prioritize the planet and your data above all else.
        </p>
        <div className="value-metrics-grid">
            <div className="metric-box">
                <span className="metric-value">Data Security</span>
                <p className="metric-label">Guaranteed, certified data wipe process.</p>
            </div>
            <div className="metric-box">
                <span className="metric-value">Trust Score</span>
                <p className="metric-label">98% Customer Satisfaction Rating.</p>
            </div>
            <div className="metric-box">
                <span className="metric-value">Green Future</span>
                <p className="metric-label">Leading the transition to a circular economy.</p>
            </div>
            <div className="metric-box">
                <span className="metric-value">48 Hours</span>
                <p className="metric-label">Quote Lock Guarantee window.</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
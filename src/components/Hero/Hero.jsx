import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Swiper modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "./Hero.css";

// Placeholder imports for banners
import banner1 from "../../assets/brands/banner1.png";
import banner2 from "../../assets/brands/banner2.png";

/**
 * Sub-component for the conversion-focused Call-to-Action.
 */
const SellGadgetCTA = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for model...");
  };

  return (
    <div className="cta-search-box">
      <form onSubmit={handleSubmit} aria-label="Device Search Form">
        <input
          type="text"
          placeholder="Enter Brand or Model (e.g., iPhone 13, Sony A7)"
          required
          aria-label="Model name input"
        />
        <button type="submit" className="cta-button">
          Get Instant Cash Offer
        </button>
      </form>
      
      {/* Trust & Conversion Boosters - Kept here for immediate proximity to form */}
      <div className="trust-badges">
        <span>✅ Free Doorstep Pickup</span>
        <span>✅ Highest Resale Value</span>
      </div>
    </div>
  );
};

/**
 * New sub-component for displaying key value propositions.
 */
const HeroFeatures = () => (
    <div className="hero-features-bar">
        <div className="feature-item">
            <span className="feature-icon">💸</span>
            <p>Instant Payment</p>
        </div>
        <div className="feature-item">
            <span className="feature-icon">🛡️</span>
            <p>100% Data Security</p>
        </div>
        <div className="feature-item">
            <span className="feature-icon">🚪</span>
            <p>Free Doorstep Pickup</p>
        </div>
        <div className="feature-item">
            <span className="feature-icon">✅</span>
            <p>Guaranteed Best Price</p>
        </div>
    </div>
);


export default function Hero() {
  const [h1Visible, setH1Visible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setH1Visible(true);
    }, 300); 

    return () => clearTimeout(timer);
  }, []);

  const banners = React.useMemo(() => [banner1, banner2], []);

  return (
    <>
      <section className="hero-section" aria-label="Main Hero Section with Offer">
        
        {/* Swiper Banner (Visual Background) */}
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="hero-swiper"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div
                className="hero-bg"
                style={{ backgroundImage: `url(${banner})` }}
                aria-label={`Promotional banner ${index + 1}`}
                role="img"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Hero Content Overlay (Conversion Focus Layer) */}
        <div className="hero-content-overlay-cta"> 
          <p className="sub-headline">
            #1 Platform to Sell Old Mobiles, Cameras, and Laptops. Safe, Secure, Fast.
          </p>
          
          <SellGadgetCTA />
        </div>
      </section>

      {/* NEW SECTION: H1 TITLE with Animation */}
      <div className={`h1-below-hero ${h1Visible ? 'is-visible' : ''}`}>
        <h1 className="main-headline-below"> 
          Sell Used Gadgets & Get Instant Cash At Your Doorstep
        </h1>
      </div>
      
      {/* NEW FEATURE BAR */}
      <HeroFeatures />

      {/* SEO Content Section */}
      <section className="hero-seo-content">
        <h2>Sell Old Gadgets at Best Price in India - How it Works</h2>
        <p>
          Get instant cash for your used gadgets including DSLR cameras, lenses, action cameras, 
          laptops, and mobile phones. Our streamlined process involves an expert inspection 
          at your doorstep, guaranteeing the highest resale value with secure and transparent payment.
        </p>
        <p>
          We eliminate the hassle of bargaining and hidden charges, offering the easiest way 
          to sell second-hand electronics without bargaining or hidden charges.
        </p>
      </section>
    </>
  );
}
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";
import logo from "../../assets/logo.png"; // Assuming you use the same logo

const quickLinks = [
  { name: "How It Works", href: "/how-it-works" },
  { name: "About Us", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Track Order", href: "/track" },
  { name: "Careers", href: "/careers" },
];

const categories = [
  { name: "Sell Mobile Phones", href: "/sell/mobile" },
  { name: "Sell DSLR Camera", href: "/sell/dslr" },
  { name: "Sell Camera Lenses", href: "/sell/lenses" },
  { name: "Sell Laptops", href: "/sell/laptops" },
  { name: "Sell Gaming Consoles", href: "/sell/consoles" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content-wrapper">
        
        {/* Column 1: Brand & Contact Info */}
        <div className="footer-col brand-info">
          <div className="footer-logo">
            <img src={logo} alt="Sell Old Gadgets Logo" />
            <h3>Sell Old Gadgets</h3>
          </div>
          <p className="tagline">
            Your trusted partner for selling used electronics quickly and securely for the highest value.
          </p>
          <div className="contact-item">
            <FaMapMarkerAlt /> 
            <span>123 Tech Park, Silicon Valley, India</span>
          </div>
          <div className="contact-item">
            <FaEnvelope /> 
            <span><a href="mailto:support@sellgadgets.com">support@sellgadgets.com</a></span>
          </div>
          <div className="contact-item">
            <FaPhone /> 
            <span><a href="tel:+919876543210">+91 98765 43210</a></span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links-list">
            {quickLinks.map(link => (
              <li key={link.name}><a href={link.href}>{link.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 3: Popular Categories */}
        <div className="footer-col">
          <h4>Selling Categories</h4>
          <ul className="footer-links-list">
            {categories.map(link => (
              <li key={link.name}><a href={link.href}>{link.name}</a></li>
            ))}
          </ul>
        </div>
        
        {/* Column 4: Social Media & Newsletter Placeholder */}
        <div className="footer-col social-col">
          <h4>Connect with Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
          
          <h4>Stay Updated</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        
      </div>
      
      {/* Footer Bottom (Copyright & Legal) */}
      <div className="footer-bottom">
        <p className="copyright-text">
          © {currentYear} Sell Old Gadgets. All rights reserved.
        </p>
        <div className="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/sitemap">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
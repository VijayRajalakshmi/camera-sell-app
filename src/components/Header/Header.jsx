import React, { useState } from "react";
import { FaBars, FaTimes, FaAngleDown, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"; // CRITICAL FIX: Import Link
import "./Header.css";
import logo from "../../assets/logo.png";

export default function Header() {
 // State for toggling the mobile menu
 const [menuOpen, setMenuOpen] = useState(false);
 // State for controlling the desktop dropdown visibility
 const [dropdownOpen, setDropdownOpen] = useState(false);

 // Define Nav links with simulated routes
 const navLinks = [
  { title: "Home", href: "/" },
  { 
   title: "Sell Here", 
   dropdown: true, 
   items: [
    { name: "Sell DSLR Camera", href: "/sell/dslr" },
    { name: "Sell Camera Lens", href: "/sell/lens" },
    { name: "Sell Action Camera", href: "/sell/action" },
    { name: "Sell Old Laptop", href: "/sell/laptop" },
    { name: "Sell Mobile Phone", href: "/sell/mobile" },
   ]
  },
  { title: "About Us", href: "/about" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact", href: "/contact" },
 ];

 return (
  <header className="sog-header sticky">
   
   {/* Logo */}
   <div className="sog-logo">
    {/* FIX: Using <Link> instead of <a> */}
    <Link to="/">
     <img src={logo} alt="Camera Becho Logo" />
    </Link>
   </div>

   {/* Desktop Navigation */}
   <nav className="sog-nav">
    <ul>
     {navLinks.map((link, index) => (
      <li
       key={index}
       className={`nav-item ${link.dropdown ? "dropdown-toggle" : ""}`}
       onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
       onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
      >
       {/* FIX: Using <Link> instead of <a> and 'to' instead of 'href' */}
       <Link to={link.href || "#"}>
        {link.title} {link.dropdown && <FaAngleDown className="dropdown-arrow" />}
       </Link>
       
       {/* Dropdown Menu */}
       {link.dropdown && dropdownOpen && (
        <div className="dropdown-menu">
         {link.items.map((item, i) => (
          <Link key={i} to={item.href}>{item.name}</Link>
         ))}
        </div>
       )}
      </li>
     ))}
    </ul>
   </nav>

   {/* CTA Button and Search Icon (Desktop/Tablet) */}
   <div className="sog-actions">
    <button className="search-icon-btn" aria-label="Search">
      <FaSearch />
    </button>
    <button className="cta-header-btn">
     Get Instant Quote
    </button>
   </div>

   {/* Mobile Menu Toggle (Hamburger) */}
   <button 
    className="menu-toggle" 
    onClick={() => setMenuOpen(!menuOpen)}
    aria-expanded={menuOpen}
    aria-controls="mobile-nav"
   >
    {menuOpen ? <FaTimes /> : <FaBars />}
   </button>

   {/* Mobile Menu (Slide-out) */}
   <div id="mobile-nav" className={`mobile-menu ${menuOpen ? "show" : ""}`}>
    <nav>
     {navLinks.map((link, index) => (
      <div key={index} className="mobile-nav-item">
       {/* FIX: Using <Link> */}
       <Link to={link.href || "#"} onClick={() => setMenuOpen(false)}>
        {link.title}
       </Link>
       {link.dropdown && (
        // Use a dedicated sub-menu expansion for mobile
        <ul className="mobile-dropdown-list">
         {link.items.map((item, i) => (
          <li key={i}>
           {/* FIX: Using <Link> */}
           <Link to={item.href} onClick={() => setMenuOpen(false)}>
            {item.name}
           </Link>
          </li>
         ))}
        </ul>
       )}
      </div>
     ))}
    </nav>
   </div>
  </header>
 );
}
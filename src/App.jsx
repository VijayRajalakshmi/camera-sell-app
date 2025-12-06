import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

// Existing Components for the Home Page
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Brands from "./components/Brands/Brands";
import Testimonials from "./components/Testimonials/Testimonials";

// Import the ContactForm component (assuming consistent casing: ContactForm)
import ContactForm from "./components/ContactForm/ContactForm"; 

// Import the FAQPage component
import FAQPage from "./components/FAQPage/FAQPage";

// 🎯 Import the new AboutUs component (assuming the folder is named 'AboutUs')
import AboutUs from "./components/AboutUs/AboutUs"; 

// A component to hold all the content that appears ONLY on the main page ("/")
const HomePageContent = () => (
 <>
  <Hero />
  <Category />
  <HowItWorks />
  <Brands />
  <Testimonials />
 </>
);

export default function App() {
 return (
    // 🎯 FIX: Added the basename prop, which is essential for GitHub Pages (subdirectory hosting)
  <Router basename="/camera-sell-app">
   <Header /> 
   <Routes>
    <Route path="/" element={<HomePageContent />} />
    <Route path="/contact" element={<ContactForm />} /> 
    <Route path="/faq" element={<FAQPage />} /> 
    {/* 🎯 New About Us Route Added */}
    <Route path="/about" element={<AboutUs />} /> 
   </Routes>
   <Footer />
  </Router>
 );
}
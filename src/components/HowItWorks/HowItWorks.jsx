import React from "react";
import { FaMobileAlt, FaTag, FaTruck, FaMoneyBillWave } from "react-icons/fa"; // Import icons
import "./HowItWorks.css";

const steps = [
  { 
    step: 1, 
    title: "Select Device & Condition", 
    desc: "Use our search bar to choose your gadget and answer a few questions about its condition.",
    icon: FaMobileAlt 
  },
  { 
    step: 2, 
    title: "Get Instant Quote", 
    desc: "Our smart algorithm provides the highest guaranteed resale value instantly.",
    icon: FaTag 
  },
  { 
    step: 3, 
    title: "Schedule Free Doorstep Pickup", 
    desc: "Book a convenient time slot. Our executive inspects the device at your location.",
    icon: FaTruck 
  },
  { 
    step: 4, 
    title: "Receive Instant Payment", 
    desc: "Once the inspection is complete, receive immediate cash or digital payment.",
    icon: FaMoneyBillWave 
  }
];

// Dedicated component for a single Step
const StepCard = ({ step, title, desc, Icon }) => (
  <div className="step-box">
    {/* Icon Wrapper for styling */}
    <div className="icon-wrapper">
      <Icon className="step-icon" />
    </div>
    <div className="step-number">{`Step ${step}`}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);


export default function HowItWorks() {
  return (
    <section className="how-it-works-section">
      <h2 className="section-title">Sell Your Gadget in 4 Simple Steps</h2>
      <div className="steps-container">
        {steps.map((s) => (
          <React.Fragment key={s.step}>
            <StepCard 
              step={s.step} 
              title={s.title} 
              desc={s.desc} 
              Icon={s.icon} 
            />
            {/* Unique Separator between steps (Hidden on last step) */}
            {s.step < steps.length && <div className="step-separator"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
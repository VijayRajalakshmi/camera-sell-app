import React, { useState } from 'react';
import './FAQPage.css'; // Don't forget to import the styles previously provided

// 1. Data focused on Laptops, Mobile Phones, and Camera Gear
const faqData = [
  {
    id: 1,
    category: "General Selling Process & Payment 💰",
    questions: [
      {
        q: "How fast will I receive payment?",
        a: "Payment is **instant** upon successful verification of the device's condition by our technician during the scheduled pickup. We offer payment via **IMPS/NEFT (Bank Transfer)** or **UPI (GPay/PhonePe)**.",
      },
      {
        q: "Do I need to pay for device pickup?",
        a: "No. Pickup is **completely free** at your specified address. Our service includes a free, insured pickup process.",
      },
      {
        q: "What documentation is required to sell?",
        a: "You must provide a valid **Government ID** (Aadhaar, Voter ID, Passport) and sign a standard **Indemnity Form** confirming the device is legally yours and not stolen.",
      },
    ],
  },
  {
    id: 2,
    category: "Mobile Phones & Laptops (Data & Condition) 💻📱",
    questions: [
      {
        q: "Do I need to erase my personal data before selling?",
        a: "Yes, you **must** perform a factory reset and ensure all accounts (iCloud, Google, Windows Find My Device) are logged out and removed. For safety, we perform a **certified data wipe** upon receiving the device, but the pre-wipe is mandatory.",
      },
      {
        q: "Can I sell a laptop or phone with a locked BIOS/FRP/iCloud lock?",
        a: "No. We can only purchase devices that are fully unlocked and free of all digital locks. Failure to remove these locks will result in the **cancellation of the sale** or a severe price deduction if removal is possible.",
      },
      {
        q: "What is considered a 'functional issue' for a laptop?",
        a: "Functional issues include problems with the display (dead pixels, lines), ports (USB, HDMI), keyboard/trackpad failure, or battery life below 50% of the original capacity. Each issue will result in a specific, transparent deduction.",
      },
    ],
  },
  {
    id: 3,
    category: "Cameras, Lenses & Accessories 📸",
    questions: [
      {
        q: "How should I assess the condition of my DSLR/Mirrorless camera?",
        a: "The camera is primarily valued by its **shutter count** (lower is better), physical condition (scratches/dents), and sensor cleanliness. Be accurate about dust spots or scratches on the screen.",
      },
      {
        q: "What factors affect the price of a camera lens?",
        a: "Lens valuation depends heavily on the **glass condition** (scratches, haze, fungus), **autofocus functionality**, and the condition of the **mount and zoom/focus rings**. Missing caps or hoods also result in small deductions.",
      },
      {
        q: "Do I need the original box and bill?",
        a: "While not mandatory for selling, providing the **original box and purchase invoice** significantly helps verify authenticity and can slightly increase the final resale value.",
      },
    ],
  },
];

const FAQPage = () => {
  // State to track the ID of the currently open question (single-open accordion)
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (itemId) => {
    // If the clicked item is already open, close it (set to null). Otherwise, open the clicked item.
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  return (
    <div className="faq-page-container">
      <div className="header-section">
        <h1>Your Selling Questions, Answered.</h1>
        <p>Get instant clarity on pricing, payment, and product-specific requirements for your devices.</p>
      </div>

      <div className="faq-list">
        {faqData.map((category) => (
          <div key={category.id} className="faq-category-section">
            <h2 className="category-title">{category.category}</h2>
            
            {category.questions.map((item, index) => {
              const uniqueId = `${category.id}-${index}`;
              const isOpen = openItemId === uniqueId;

              return (
                <div key={uniqueId} className="faq-item">
                  {/* Button with integrated toggle logic */}
                  <button 
                    className={`faq-question ${isOpen ? 'open' : ''}`} 
                    onClick={() => toggleItem(uniqueId)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="toggle-icon">{isOpen ? '−' : '+'}</span> 
                  </button>
                  
                  {/* Conditional rendering of the answer */}
                  {isOpen && (
                    <div className="faq-answer">
                      <p dangerouslySetInnerHTML={{ __html: item.a }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
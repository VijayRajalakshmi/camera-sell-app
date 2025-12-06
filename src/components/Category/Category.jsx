import React from "react";
import "./Category.css";

const categories = [
  { name: "DSLR Cameras", img: "/dslr.png" },
  { name: "Camera Lenses", img: "/lens.png" },
  { name: "Laptops", img: "/laptop.png" },
  { name: "Smartphones", img: "/phone.png" },
  { name: "Action Cameras", img: "/action.png" },
];

export default function Category() {
  return (
    <section className="category">
      <h2>Select a Device You Wish To Sell</h2>
      <div className="category-grid">
        {categories.map((c, i) => (
          <div className="category-card" key={i}>
            <img src={c.img} alt={c.name} />
            <p>{c.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Swiper 10+ modules: Autoplay is the key for automatic swiping
import { Autoplay, Pagination } from "swiper/modules";

import "./Brands.css";

// Brand logos (Paths must be correct in your project)
import sigmaLogo from "../../assets/brands/sigma.webp";
import nikonLogo from "../../assets/brands/nikon.webp";
import tamronLogo from "../../assets/brands/tamron.webp";
import panasonicLogo from "../../assets/brands/panasonic.webp";
import canonLogo from "../../assets/brands/canon.webp";

const brands = [
  { name: "Sigma", logo: sigmaLogo },
  { name: "Nikon", logo: nikonLogo },
  { name: "Tamron", logo: tamronLogo },
  { name: "Panasonic", logo: panasonicLogo },
  { name: "Canon", logo: canonLogo },
];

export default function Brands() {
  return (
    <section className="brands-section" aria-label="Trusted Brands We Deal With">
      <h2 className="section-title">Trusted Brands We Deal With</h2>

      <Swiper
        spaceBetween={40}
        slidesPerView={2}
        loop={true}
        centeredSlides={true}
        // 🔑 THIS IS THE AUTOMATIC SWIPER FUNCTIONALITY 
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="brand-swiper-container"
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 50 }, 
          1400: { slidesPerView: 5, spaceBetween: 60 },
        }}
      >
        {brands.map((b, i) => (
          <SwiperSlide key={i} className="brand-slide">
            <div className="brand-card-wrapper"> 
                <img 
                src={b.logo} 
                alt={`${b.name} Logo`} 
                loading="lazy" 
                className="brand-logo-image" 
                />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
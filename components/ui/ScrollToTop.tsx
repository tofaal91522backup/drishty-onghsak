"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      // Added dynamic classes for smooth fade-in and slide-up animations
      className={`fixed bottom-8 right-8 z-50 p-3 text-white rounded-full shadow-lg transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#ed8c2f] focus:ring-offset-2 bg-[#ed8c2f] hover:bg-[#d67b25] hover:shadow-xl group cursor-pointer ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      {/* The arrow will smoothly move up a little bit on hover */}
      <ArrowUp 
        size={24} 
        className="transition-transform duration-300 group-hover:-translate-y-1" 
      />
    </button>
  );
};

export default ScrollToTop;
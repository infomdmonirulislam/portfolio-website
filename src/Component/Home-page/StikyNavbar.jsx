import React, { useState, useEffect } from "react";
import NavItems from "../Shared-folder/NavItems";

export default function StikyNavbar() {
  const [showNavbar, setShowNavbar] = useState(false); // Hidden by default

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        // At the very top
        setShowNavbar(false);
      } else {
        // Scrolled down
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`md:max-w-[1920px] mx-auto top-0 left-0 right-0 py-2 pr-5 fixed bg-black text-white transition-transform duration-200 z-10 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full">
          <NavItems />
        </div>
      </div>
    </>
  );
}

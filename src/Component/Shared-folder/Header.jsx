import React, { useState } from "react";
import HomeIcon from "../IconLibrary/HomeIcon";
import NavItems from "../Shared-folder/NavItems";
import StikyNavbar from "../Home-page/StikyNavbar";
import Hambargarmenu from "../IconLibrary/Hambargarmenu";
import Crossbutton from "../IconLibrary/Crossbutton";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const hambargarIcon = Hambargarmenu;
  const crossbuttonIcons = Crossbutton;
  return (
    <header className="max-w-[1920px] mx-auto">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <StikyNavbar />
      </div>

      <div className="hidden md:flex justify-between items-center p-4">
        <div>
          <HomeIcon />
        </div>
        <div>
          <NavItems />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="p-4 flex justify-between items-center bg-black md:hidden">
        <div>
          <HomeIcon />
        </div>
        <div>
          <button onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen
              ? React.createElement(crossbuttonIcons)
              : React.createElement(hambargarIcon)}
          </button>
        </div>
      </div>

      {/* Mobile NavItems - shown only if isNavOpen is true */}
      {isNavOpen && (
        <div className="w-full h-screen bg-mobileBgHeroImage bg-no-repeat bg-cover border-t-2">
          <div className="text-center pt-32">
            <NavItems />
          </div>
        </div>
      )}
    </header>
  );
}

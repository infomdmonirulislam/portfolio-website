// import React from "react";
// import HomeIcon from "../IconLibrary/HomeIcon";
// import NavItems from "../Shared-folder/NavItems";
// import Sidebar from "../Home-page/Sidebar";
// import StikyNavbar from "../Home-page/StikyNavbar";

// export default function Header() {
//   return (
//     <header className="md:max-w-[1920px] mx-auto">
//       <div className="hidden md:block">
//         <StikyNavbar />
//       </div>
//       <div className="hidden md:flex justify-between items-center p-4">
//         <div>
//           <HomeIcon />
//         </div>
//         <div className="">
//           <NavItems />
//         </div>
//       </div>
//       <div className="md:hidden">
//         <Sidebar />
//       </div>
//     </header>
//   );
// }
import React, { useState } from "react";
import HomeIcon from "../IconLibrary/HomeIcon";
import NavItems from "../Shared-folder/NavItems";
import StikyNavbar from "../Home-page/StikyNavbar";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-red-300 md:max-w-[1920px] mx-auto">
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
      <div className="md:hidden p-4 flex justify-between items-center">
        <HomeIcon />
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="text-2xl font-bold"
        >
          {isNavOpen ? "✖" : "☰"} {/* Cross or Hamburger icon */}
        </button>
      </div>

      {/* Mobile NavItems - shown only if isNavOpen is true */}
      {isNavOpen && (
        <div className="md:hidden px-4 pb-4">
          <NavItems />
        </div>
      )}
    </header>
  );
}

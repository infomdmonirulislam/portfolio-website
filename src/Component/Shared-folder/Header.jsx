import React from "react";
import HomeIcon from "../IconLibrary/HomeIcon";
import NavItems from "../Shared-folder/NavItems";
import Sidebar from "../Home-page/Sidebar";

export default function Header() {
  return (
    <header>
      <div className="md:max-w-[1920px] mx-auto flex justify-between items-center">
        <div>
          <HomeIcon />
        </div>
        <div className="hidden md:block">
          <NavItems />
        </div>
      </div>
      <div className="md:hidden">
        <Sidebar />
      </div>
    </header>
  );
}
